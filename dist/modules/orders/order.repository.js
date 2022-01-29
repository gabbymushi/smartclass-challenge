"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.completeOrder = exports.getOrderById = exports.getOrders = exports.createOrder = void 0;
const order_model_1 = require("./order.model");
const createOrder = (body) => {
    return order_model_1.Order.create(body);
};
exports.createOrder = createOrder;
const getOrders = (user) => {
    //const search = new RegExp('.*' + keyword + '.*', 'i');
    return order_model_1.Order.find({ user, status: 1 })
        .populate('item')
        .sort({ createdAt: -1 });
};
exports.getOrders = getOrders;
const getOrderById = (id) => {
    return order_model_1.Order.findOne({ _id: id }).populate('item');
};
exports.getOrderById = getOrderById;
const completeOrder = (id, body) => {
    return order_model_1.Order.findOneAndUpdate({ _id: id }, Object.assign({}, body), { new: true });
};
exports.completeOrder = completeOrder;
const updateOrder = (id, body) => {
    return order_model_1.Order.findOneAndUpdate({ _id: id }, Object.assign({}, body), { new: true });
};
exports.updateOrder = updateOrder;
const deleteOrder = (id) => {
    return order_model_1.Order.deleteOne({ _id: id });
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVycy9vcmRlci5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUE4QztBQUV2QyxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3hDLE9BQU8sbUJBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBO0FBRlksUUFBQSxXQUFXLGVBRXZCO0FBRU0sTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN0Qyx3REFBd0Q7SUFFeEQsT0FBTyxtQkFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNoQixJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQTtBQU5ZLFFBQUEsU0FBUyxhQU1yQjtBQUVNLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7SUFDdkMsT0FBTyxtQkFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUE7QUFGWSxRQUFBLFlBQVksZ0JBRXhCO0FBRU0sTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFVLEVBQUUsSUFBUyxFQUFFLEVBQUU7SUFDbkQsT0FBTyxtQkFBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxvQkFBTyxJQUFJLEdBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzRSxDQUFDLENBQUE7QUFGWSxRQUFBLGFBQWEsaUJBRXpCO0FBRU0sTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFVLEVBQUUsSUFBUyxFQUFFLEVBQUU7SUFDakQsT0FBTyxtQkFBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxvQkFBTyxJQUFJLEdBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzRSxDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ3RDLE9BQU8sbUJBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkIifQ==