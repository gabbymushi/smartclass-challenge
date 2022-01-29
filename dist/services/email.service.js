"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../config/constants");
const { EMAIL_URL, EMAIL_SENDER } = constants_1.constants;
const sendEmail = (recipient, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailPayLoad = {
            from: EMAIL_SENDER,
            to: recipient,
            subject: 'IPF CRM Notification',
            html: message
        };
        const response = yield axios_1.default.post(EMAIL_URL, emailPayLoad);
        return response;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9lbWFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixtREFBZ0Q7QUFFaEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsR0FBRyxxQkFBUyxDQUFDO0FBRXZDLE1BQU0sU0FBUyxHQUFHLENBQU8sU0FBYyxFQUFFLE9BQVksRUFBRSxFQUFFO0lBQzVELElBQUk7UUFDQSxNQUFNLFlBQVksR0FBRztZQUNqQixJQUFJLEVBQUUsWUFBWTtZQUNsQixFQUFFLEVBQUUsU0FBUztZQUNiLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FDN0IsU0FBUyxFQUNULFlBQVksQ0FDZixDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUM7S0FDbkI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFsQlksUUFBQSxTQUFTLGFBa0JyQiJ9