import { Schema, Document, model } from 'mongoose';

export interface IItem extends Document {
    name: string,
    pictureUrl: string,
    amount: Number,
}

const ItemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name  is required!'],
    },
    amount: {
        type: Number
    },
    pictureUrl: {
        type: String
    }

},
    { timestamps: true }
);

export const Item = model<IItem>('Item', ItemSchema);