"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrders = exports.completeOrder = exports.createOrder = void 0;
const orderRepository = __importStar(require("./order.repository"));
const transaction_service_1 = require("../transactions/transaction.service");
const order_model_1 = require("./order.model");
const createOrder = (body) => __awaiter(void 0, void 0, void 0, function* () {
    if (body.paidAmount > body.amount) {
        throw new Error('The amount you are paying is greater the outstanding balance.');
    }
    const order = yield orderRepository.createOrder(body);
    if (body.paidAmount >= order.amount) {
        yield orderRepository.updateOrder(order._id, { status: order_model_1.ORDER_STATUSES.COMPLETED });
    }
    return order;
});
exports.createOrder = createOrder;
const completeOrder = (amount, id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield orderRepository.getOrderById(id);
    if (!order) {
        throw new Error('Oder does not exist.');
    }
    const balance = order.amount - order.paidAmount;
    if (amount > balance) {
        throw new Error('The amount you are paying is greater the outstanding balance.');
    }
    const paidAmount = Number(order.paidAmount) + Number(amount);
    yield orderRepository.completeOrder(id, { paidAmount });
    yield (0, transaction_service_1.createTransaction)({
        amount, order: order._id, user: order.user
    });
    if (paidAmount >= order.amount) {
        yield orderRepository.updateOrder(id, { status: order_model_1.ORDER_STATUSES.COMPLETED });
    }
});
exports.completeOrder = completeOrder;
const getOrders = (user) => {
    return orderRepository.getOrders(user);
};
exports.getOrders = getOrders;
const getOrderById = (orderId) => {
    return orderRepository.getOrderById(orderId);
};
exports.getOrderById = getOrderById;
const updateOrder = (orderId, body) => {
    return orderRepository.updateOrder(orderId, body);
};
exports.updateOrder = updateOrder;
const deleteOrder = (orderId) => {
    return orderRepository.deleteOrder(orderId);
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVycy9vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBc0Q7QUFDdEQsNkVBQXdFO0FBQ3hFLCtDQUF1RDtBQUVoRCxNQUFNLFdBQVcsR0FBRyxDQUFPLElBQVMsRUFBRSxFQUFFO0lBQzNDLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztLQUNwRjtJQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0RCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNqQyxNQUFNLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSw0QkFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDdEY7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsV0FBVyxlQVl2QjtBQUVNLE1BQU0sYUFBYSxHQUFHLENBQU8sTUFBYyxFQUFFLEVBQVUsRUFBRSxFQUFFO0lBQzlELE1BQU0sS0FBSyxHQUFHLE1BQU0sZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVyRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBRWhELElBQUksTUFBTSxHQUFHLE9BQU8sRUFBRTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7S0FDcEY7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU3RCxNQUFNLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUV4RCxNQUFNLElBQUEsdUNBQWlCLEVBQUM7UUFDcEIsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtLQUM3QyxDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzVCLE1BQU0sZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsNEJBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQy9FO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUF4QlksUUFBQSxhQUFhLGlCQXdCekI7QUFFTSxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3RDLE9BQU8sZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUE7QUFGWSxRQUFBLFNBQVMsYUFFckI7QUFFTSxNQUFNLFlBQVksR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQzVDLE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUE7QUFGWSxRQUFBLFlBQVksZ0JBRXhCO0FBRU0sTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFlLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDekQsT0FBTyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQzNDLE9BQU8sZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUE7QUFGWSxRQUFBLFdBQVcsZUFFdkIifQ==