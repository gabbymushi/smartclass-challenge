import * as itemRepository from './item.repositroy';
import { IItem } from './item.model';

export const createItem = async (body: IItem) => {
    try {
        const item = await itemRepository.createItem(body);

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getItems = async (name: string) => {
    try {
        const items = await itemRepository.getItems(name);

        return items;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getItemById = async (itemId: string) => {
    try {
        const item = await itemRepository.getItemById(itemId);

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const updateItem = async (itemId: string, body: IItem) => {
    try {
        const item = await itemRepository.updateItem(itemId, body);

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const deleteItem = async (itemId: string) => {
    try {
        const item = await itemRepository.deleteItem(itemId);

        return item;
    } catch (e) {
        throw new Error(e.message);
    }
}

