import { ITransaction, Transaction } from './transaction.model';

export const createTransaction = (body: ITransaction) => {
    return Transaction.create(body);
}

export const getTransactions = (keyword: string) => {
    const search = new RegExp('.*' + keyword + '.*', 'i');

    return Transaction.find({ name: { $regex: search } });
}

export const getTransactionById = (dealId: string) => {
    return Transaction.findOne({ _id: dealId });
}

export const updateTransaction = (dealId: string, body: ITransaction) => {
    return Transaction.findOneAndUpdate({ _id: dealId }, { ...body }, { new: true });
}

export const deleteTransaction = (dealId: string) => {
    return Transaction.deleteOne({ _id: dealId });
}