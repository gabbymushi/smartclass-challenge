import * as transactionRepository from './transaction.repository';
import { ITransaction } from './transaction.model';

export const generateReferenceNumber = () => {
    return `TL${Math.random().toString(36).substr(2, 16).toUpperCase()}`;
}

export const createTransaction = (body: any) => {
    const transaction = { ...body, reference: generateReferenceNumber() }

    return transactionRepository.createTransaction(transaction);
}

export const getTransactions = (name: string) => {
    return transactionRepository.getTransactions(name);
}

export const getTransactionById = (transactionId: string) => {
    return transactionRepository.getTransactionById(transactionId);
}

export const updateTransaction = (transactionId: string, body: ITransaction) => {
    return transactionRepository.updateTransaction(transactionId, body);
}

export const deleteTransaction = (transactionId: string) => {
    return transactionRepository.deleteTransaction(transactionId);
}

