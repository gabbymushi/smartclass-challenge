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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOTP = exports.verifyOtp = exports.deleteOtp = exports.createOtp = void 0;
const otp_model_1 = require("./otp.model");
const createOtp = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const otp = yield otp_model_1.OTP.create(body);
        return otp;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.createOtp = createOtp;
const deleteOtp = (phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const otp = yield otp_model_1.OTP.deleteOne({ phoneNumber });
        return otp;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteOtp = deleteOtp;
const verifyOtp = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, otp } = body;
        const verifiedOTP = yield otp_model_1.OTP.findOneAndUpdate({ username, otp }, { verifiedAt: Date.now() });
        return verifiedOTP;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.verifyOtp = verifyOtp;
const getOTP = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, otp } = body;
        const availableOTP = yield otp_model_1.OTP.findOne({ username, otp });
        return availableOTP;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getOTP = getOTP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vdHAvb3RwLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBRWpDLE1BQU0sU0FBUyxHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7SUFDNUMsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU0sZUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQyxPQUFPLEdBQUcsQ0FBQztLQUNkO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBUlksUUFBQSxTQUFTLGFBUXJCO0FBRU0sTUFBTSxTQUFTLEdBQUcsQ0FBTyxXQUFnQixFQUFFLEVBQUU7SUFDaEQsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU0sZUFBRyxDQUFDLFNBQVMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFFL0MsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVJZLFFBQUEsU0FBUyxhQVFyQjtBQUVNLE1BQU0sU0FBUyxHQUFHLENBQU8sSUFBVSxFQUFFLEVBQUU7SUFDMUMsSUFBSTtRQUNBLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sV0FBVyxHQUFHLE1BQU0sZUFBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFOUYsT0FBTyxXQUFXLENBQUM7S0FDdEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFUWSxRQUFBLFNBQVMsYUFTckI7QUFFTSxNQUFNLE1BQU0sR0FBRyxDQUFPLElBQVUsRUFBRSxFQUFFO0lBQ3ZDLElBQUk7UUFDQSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMvQixNQUFNLFlBQVksR0FBRyxNQUFNLGVBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUUxRCxPQUFPLFlBQVksQ0FBQztLQUN2QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVRZLFFBQUEsTUFBTSxVQVNsQiJ9