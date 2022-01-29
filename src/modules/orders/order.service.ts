import * as orderRepository from './order.repository';
import { IOrder } from './order.model';

export const createOrder = (body: IOrder) => {
    return orderRepository.createOrder(body);
}

export const getOrders = (name: string) => {
    return orderRepository.getOrders(name);
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

