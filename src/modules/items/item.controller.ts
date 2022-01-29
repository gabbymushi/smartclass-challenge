import { Request, RequestHandler, Response } from 'express';
import * as itemService from './item.service';

export const createItem = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const item = await itemService.createItem(body);

        return res.status(200).json(item);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getItems: RequestHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const items = await itemService.getItems(name as unknown as string ?? '');

        res.render('index', { items: items });
        // return res.status(200).json(items);
    } catch (e) {

        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    try {
        const { itemId } = req.params;
        const item = await itemService.deleteItem(itemId);

        return res.status(200).json(item);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getItemById = async (req: Request, res: Response) => {
    try {
        const { itemId } = req.params;
        const item = await itemService.getItemById(itemId);

        return res.status(200).json(item);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const updateItem = async (req: Request, res: Response) => {
    try {
        const { itemId } = req.params;
        const { body } = req;
        const item = await itemService.updateItem(itemId, body);

        return res.status(200).json(item);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

