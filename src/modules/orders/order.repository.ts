import { IOrder, Order } from './order.model';

export const createOrder = (body: IOrder) => {
    return Order.create(body);
}

export const getOrders = (keyword: string) => {
    const search = new RegExp('.*' + keyword + '.*', 'i');

    return Order.find({ name: { $regex: search } });
}

export const getOrderById = (dealId: string) => {
    return Order.findOne({ _id: dealId });
}

export const updateOrder = (dealId: string, body: IOrder) => {
    return Order.findOneAndUpdate({ _id: dealId }, { ...body }, { new: true });
}

export const deleteOrder = (dealId: string) => {
    return Order.deleteOne({ _id: dealId });
}