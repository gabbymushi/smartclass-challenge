import { Request, RequestHandler, Response } from 'express';
import * as transactionService from './transaction.service';

export const createTransaction = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const transaction = await transactionService.createTransaction(body);

        return res.status(200).json(transaction);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const getTransactions: RequestHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const transactions = await transactionService.getTransactions(name as unknown as string ?? '');

        return res.status(200).json(transactions);
    } catch (e) {

        return res.status(400).json({
            userMessage:  e.message,
            developerMessage: e.message
        });
    }
}

export const deleteTransaction = async (req: Request, res: Response) => {
    try {
        const { transactionId } = req.params;
        const transaction = await transactionService.deleteTransaction(transactionId);

        return res.status(200).json(transaction);
    } catch (e) {
        return res.status(400).json({
            userMessage:  e.message,
            developerMessage: e.message
        });
    }
}

export const gettransactionById = async (req: Request, res: Response) => {
    try {
        const { transactionId } = req.params;
        const transaction = await transactionService.getTransactionById(transactionId);

        return res.status(200).json(transaction);
    } catch (e) {
        return res.status(400).json({
            userMessage:  e.message,
            developerMessage: e.message
        });
    }
}

export const updateTransaction = async (req: Request, res: Response) => {
    try {
        const { transactionId } = req.params;
        const { body } = req;
        const transaction = await transactionService.updateTransaction(transactionId, body);

        return res.status(200).json(transaction);
    } catch (e) {
        return res.status(400).json({
            userMessage:  e.message,
            developerMessage: e.message
        });
    }
}

