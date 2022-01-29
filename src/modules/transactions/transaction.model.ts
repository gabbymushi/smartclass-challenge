import { Schema, Document, model } from 'mongoose';
import { IItem } from '../items/item.model';
import { IOrder } from '../orders/order.model';
import { IUser } from '../users/user.model';

export interface ITransaction extends Document {
    amount: Number,
    reference: String,
    order: IOrder['_id'],
    user: IUser['_id']
}

const TransactionSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        order: {
            type: Schema.Types.ObjectId,
            ref: 'Order',
            index: true,
            required: true
        },
        reference: {
            type: String,
            index: true,
            required: true,
            unique: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            index: true,
            required: true
        },
    },
    { timestamps: true }
);

export const Transaction = model<ITransaction>('Transaction', TransactionSchema);