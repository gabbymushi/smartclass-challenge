import { IItem, Item } from './item.model';

export const createItem = async (body: IItem) => {
    try {
        const item = await Item.create(body);

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getItems = async (keyword: string) => {
    try {
        const search = new RegExp('.*' + keyword + '.*', 'i');

        const items = await Item.find({ name: { $regex: search } });

        return items;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getItemById = async (itemId: string) => {
    try {
        const item = await Item.findOne({ _id: itemId });

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateItem = async (itemId: string, body: IItem) => {
    try {
        const item = await Item.findOneAndUpdate({ _id: itemId }, { ...body }, { new: true });

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteItem = async (itemId: string) => {
    try {
        const item = await Item.deleteOne({ _id: itemId });

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

