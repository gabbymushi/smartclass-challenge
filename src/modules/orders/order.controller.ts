import { Request, RequestHandler, Response } from 'express';
import * as orderService from './order.service';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const order = await orderService.createOrder(body);

        return res.status(200).json(order);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const getOrders: RequestHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const orders = await orderService.getOrders(name as unknown as string ?? '');

        return res.status(200).json(orders);
    } catch (e) {

        return res.status(400).json({
            userMessage:  e.message,
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
            userMessage:  e.message,
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
            userMessage:  e.message,
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
            userMessage:  e.message,
            developerMessage: e.message
        });
    }
}

