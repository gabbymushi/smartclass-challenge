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
exports.sendSMS = void 0;
const axios_1 = __importDefault(require("axios"));
//const { SMS_URL, SMS_API_ID, SMS_API_PASSWORD, SMS_SENDER_ID } = constants;
const sendSMS = (recipient, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const smsPayLoad = {
            api_id: SMS_API_ID,
            api_password: SMS_API_PASSWORD,
            sms_type: 'P',
            encoding: 'T',
            sender_id: SMS_SENDER_ID,
            phonenumber: recipient,
            textmessage: message
        };
        const response = yield axios_1.default.post(SMS_URL, smsPayLoad);
        return response;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.sendSMS = sendSMS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvc21zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBRzFCLDZFQUE2RTtBQUV0RSxNQUFNLE9BQU8sR0FBRyxDQUFPLFNBQWMsRUFBRSxPQUFZLEVBQUUsRUFBRTtJQUMxRCxJQUFJO1FBQ0EsTUFBTSxVQUFVLEdBQUc7WUFDZixNQUFNLEVBQUUsVUFBVTtZQUNsQixZQUFZLEVBQUUsZ0JBQWdCO1lBQzlCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixTQUFTLEVBQUUsYUFBYTtZQUN4QixXQUFXLEVBQUUsU0FBUztZQUN0QixXQUFXLEVBQUUsT0FBTztTQUN2QixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUM3QixPQUFPLEVBQ1AsVUFBVSxDQUNiLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztLQUNuQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQXBCWSxRQUFBLE9BQU8sV0FvQm5CIn0=