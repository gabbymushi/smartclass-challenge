import * as orderRepository from './order.repository';
import { createTransaction } from '../transactions/transaction.service';
import { IOrder, ORDER_STATUSES } from './order.model';

export const createOrder = async (body: any) => {
    if (body.paidAmount > body.amount) {
        throw new Error('The amount you are paying is greater the outstanding balance.');
    }

    const order = await orderRepository.createOrder(body);

    if (body.paidAmount >= order.amount) {
        await orderRepository.updateOrder(order._id, { status: ORDER_STATUSES.COMPLETED });
    }

    return order;
}

export const completeOrder = async (amount: Number, id: string) => {
    const order = await orderRepository.getOrderById(id);

    if (!order) {
        throw new Error('Oder does not exist.');
    }

    const balance = order.amount - order.paidAmount;

    if (amount > balance) {
        throw new Error('The amount you are paying is greater the outstanding balance.');
    }

    const paidAmount = Number(order.paidAmount) + Number(amount);

    await orderRepository.completeOrder(id, { paidAmount });

    await createTransaction({
        amount, order: order._id, user: order.user
    });

    if (paidAmount >= order.amount) {
        await orderRepository.updateOrder(id, { status: ORDER_STATUSES.COMPLETED });
    }
}

export const getOrders = (user: string) => {
    return orderRepository.getOrders(user);
}

export const getOrderById = (orderId: string) => {
    return orderRepository.getOrderById(orderId);
}

export const updateOrder = (orderId: string, body: IOrder) => {
    return orderRepository.updateOrder(orderId, body);
}

export const deleteOrder = (orderId: string) => {
    return orderRepository.deleteOrder(orderId);
}

