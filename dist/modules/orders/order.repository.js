"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrders = exports.createOrder = void 0;
const order_model_1 = require("./order.model");
const createOrder = (body) => {
    return order_model_1.Order.create(body);
};
exports.createOrder = createOrder;
const getOrders = (keyword) => {
    const search = new RegExp('.*' + keyword + '.*', 'i');
    return order_model_1.Order.find({ name: { $regex: search } });
};
exports.getOrders = getOrders;
const getOrderById = (dealId) => {
    return order_model_1.Order.findOne({ _id: dealId });
};
exports.getOrderById = getOrderById;
const updateOrder = (dealId, body) => {
    return order_model_1.Order.findOneAndUpdate({ _id: dealId }, Object.assign({}, body), { new: true });
};
exports.updateOrder = updateOrder;
const deleteOrder = (dealId) => {
    return order_model_1.Order.deleteOne({ _id: dealId });
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVycy9vcmRlci5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUE4QztBQUV2QyxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3hDLE9BQU8sbUJBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBO0FBRlksUUFBQSxXQUFXLGVBRXZCO0FBRU0sTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN6QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV0RCxPQUFPLG1CQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUE7QUFKWSxRQUFBLFNBQVMsYUFJckI7QUFFTSxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQzNDLE9BQU8sbUJBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUE7QUFGWSxRQUFBLFlBQVksZ0JBRXhCO0FBRU0sTUFBTSxXQUFXLEdBQUcsQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDeEQsT0FBTyxtQkFBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxvQkFBTyxJQUFJLEdBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQzFDLE9BQU8sbUJBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkIifQ==