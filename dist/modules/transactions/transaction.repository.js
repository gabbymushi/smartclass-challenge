"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.getTransactionById = exports.getTransactions = exports.createTransaction = void 0;
const transaction_model_1 = require("./transaction.model");
const createTransaction = (body) => {
    return transaction_model_1.Transaction.create(body);
};
exports.createTransaction = createTransaction;
const getTransactions = (keyword) => {
    const search = new RegExp('.*' + keyword + '.*', 'i');
    return transaction_model_1.Transaction.find({ name: { $regex: search } });
};
exports.getTransactions = getTransactions;
const getTransactionById = (dealId) => {
    return transaction_model_1.Transaction.findOne({ _id: dealId });
};
exports.getTransactionById = getTransactionById;
const updateTransaction = (dealId, body) => {
    return transaction_model_1.Transaction.findOneAndUpdate({ _id: dealId }, Object.assign({}, body), { new: true });
};
exports.updateTransaction = updateTransaction;
const deleteTransaction = (dealId) => {
    return transaction_model_1.Transaction.deleteOne({ _id: dealId });
};
exports.deleteTransaction = deleteTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24ucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUFnRTtBQUV6RCxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBa0IsRUFBRSxFQUFFO0lBQ3BELE9BQU8sK0JBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBO0FBRlksUUFBQSxpQkFBaUIscUJBRTdCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV0RCxPQUFPLCtCQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUE7QUFKWSxRQUFBLGVBQWUsbUJBSTNCO0FBRU0sTUFBTSxrQkFBa0IsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ2pELE9BQU8sK0JBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUE7QUFGWSxRQUFBLGtCQUFrQixzQkFFOUI7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQUMsTUFBYyxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUNwRSxPQUFPLCtCQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLG9CQUFPLElBQUksR0FBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLENBQUMsQ0FBQTtBQUZZLFFBQUEsaUJBQWlCLHFCQUU3QjtBQUVNLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUNoRCxPQUFPLCtCQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFBO0FBRlksUUFBQSxpQkFBaUIscUJBRTdCIn0=