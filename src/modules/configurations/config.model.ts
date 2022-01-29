import { Schema, Document, model } from 'mongoose';

export interface IConfig extends Document {
    module: string,
    name: string,
    displayName: string,
    type: string,
    country: string,
    value: string
}

export interface ICONFIG {
    module: string,
    name: string,
    displayName: string,
    type: string,
    value?: string,
    country: string
}

const ConfigSchema = new Schema(
    {
        module: {
            type: String,
            required: [true, 'module is required'],
        },
        name: {
            type: String,
            required: [true, 'Config name is required'],
            index: true,
            trim: true
        },
        displayName: {
            type: String,
            required: [true, 'Display name is required'],
        },
        type: {
            type: String,
            required: [true, 'Type is required'],
            trim: true
        },
        value: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            required: [true, 'Display name is required'],
            default: 'TZ',
            index: true
        },
    },
    { timestamps: true },
);

export const Config = model<IConfig>('Config', ConfigSchema);
