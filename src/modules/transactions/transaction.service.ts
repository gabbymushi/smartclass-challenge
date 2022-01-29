import * as transactionRepository from './transaction.repository';
import { ITransaction } from './transaction.model';

export const createTransaction = (body: ITransaction) => {
    return transactionRepository.createTransaction(body);
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

