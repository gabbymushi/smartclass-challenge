import { Schema, Document, model } from 'mongoose';
import { IItem } from '../items/item.model';
import { IUser } from '../users/user.model';

export enum ORDER_STATUSES {
    PENDING = 0,
    PARTIAL = 1,
    COMPLETED = 2
}

export interface IOrder extends Document {
    item: IItem['_id'],
    amount: string,
    paidAmount: string,
    status: Number,
    user: IUser['_id']
}


const OrderSchema = new Schema<IOrder>({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        index: true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paidAmount: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        enum: [ORDER_STATUSES],
        default: ORDER_STATUSES.PENDING
    }
},
    { timestamps: true }
);

export const Order = model<IOrder>('Order', OrderSchema);