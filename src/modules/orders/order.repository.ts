import { IOrder, Order } from './order.model';

export const createOrder = (body: IOrder) => {
    return Order.create(body);
}

export const getOrders = (user: string) => {
    //const search = new RegExp('.*' + keyword + '.*', 'i');

    return Order.find({ user, status: 1 })
        .populate('item')
        .sort({ createdAt: -1 });
}

export const getOrderById = (id: string) => {
    return Order.findOne({ _id: id }).populate('item');
}

export const completeOrder = (id: string, body: any) => {
    return Order.findOneAndUpdate({ _id: id }, { ...body }, { new: true });
}

export const updateOrder = (id: string, body: any) => {
    return Order.findOneAndUpdate({ _id: id }, { ...body }, { new: true });
}

export const deleteOrder = (id: string) => {
    return Order.deleteOne({ _id: id });
}