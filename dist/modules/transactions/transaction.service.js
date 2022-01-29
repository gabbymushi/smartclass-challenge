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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.getTransactionById = exports.getTransactions = exports.createTransaction = void 0;
const transactionRepository = __importStar(require("./transaction.repository"));
const createTransaction = (body) => {
    return transactionRepository.createTransaction(body);
};
exports.createTransaction = createTransaction;
const getTransactions = (name) => {
    return transactionRepository.getTransactions(name);
};
exports.getTransactions = getTransactions;
const getTransactionById = (transactionId) => {
    return transactionRepository.getTransactionById(transactionId);
};
exports.getTransactionById = getTransactionById;
const updateTransaction = (transactionId, body) => {
    return transactionRepository.updateTransaction(transactionId, body);
};
exports.updateTransaction = updateTransaction;
const deleteTransaction = (transactionId) => {
    return transactionRepository.deleteTransaction(transactionId);
};
exports.deleteTransaction = deleteTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBa0U7QUFHM0QsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQWtCLEVBQUUsRUFBRTtJQUNwRCxPQUFPLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQTtBQUZZLFFBQUEsaUJBQWlCLHFCQUU3QjtBQUVNLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDNUMsT0FBTyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFBO0FBRlksUUFBQSxlQUFlLG1CQUUzQjtBQUVNLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxhQUFxQixFQUFFLEVBQUU7SUFDeEQsT0FBTyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUE7QUFGWSxRQUFBLGtCQUFrQixzQkFFOUI7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQUMsYUFBcUIsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDM0UsT0FBTyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFBO0FBRlksUUFBQSxpQkFBaUIscUJBRTdCO0FBRU0sTUFBTSxpQkFBaUIsR0FBRyxDQUFDLGFBQXFCLEVBQUUsRUFBRTtJQUN2RCxPQUFPLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQTtBQUZZLFFBQUEsaUJBQWlCLHFCQUU3QiJ9