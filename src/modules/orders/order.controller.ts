import { Request, RequestHandler, Response } from 'express';
import { getItemById } from '../items/item.service';
import { createTransaction } from '../transactions/transaction.service';
import * as orderService from './order.service';

export const createOrderPage = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        // const order = await orderService.createOrder(body);
        const item = await getItemById(req.params.id);

        res.render('create-order', { item: item });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const createOrder = async (req: Request, res: Response) => {
    try {
        const user = "61f51a487170db99f8f8e838";
        const { price, amountPaid, item, phoneNumber } = req.body;
        const payload = {
            user, item,
            amount: price, paidAmount: amountPaid
        }

        const order = await orderService.createOrder(payload);
        await createTransaction({
            amount: amountPaid, order: order._id, user
        });

        res.redirect("/");
        //return res.status(200).json(order);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}


export const completeOrderPage = async (req: Request, res: Response) => {
    try {
        const order = await orderService.getOrderById(req.params.id);

        res.render('complete-order', { order: order });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const completeOrder = async (req: Request, res: Response) => {
    try {
        const user = "61f51a487170db99f8f8e838";
        const { amount, orderId, phoneNumber } = req.body;

        const order = await orderService.completeOrder(amount, orderId);

        res.redirect("/orders/view");
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const getOrders: RequestHandler = async (req, res) => {
    try {
        const user = "61f51a487170db99f8f8e838";

        const orders = await orderService.getOrders(user);

        res.render('view-orders', { orders: orders });

        //return res.status(200).json(orders);
    } catch (e) {

        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const order = await orderService.deleteOrder(orderId);

        return res.status(200).json(order);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const getorderById = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const order = await orderService.getOrderById(orderId);

        return res.status(200).json(order);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const { body } = req;
        const order = await orderService.updateOrder(orderId, body);

        return res.status(200).json(order);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

