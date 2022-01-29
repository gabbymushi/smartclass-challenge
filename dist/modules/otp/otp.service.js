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
exports.hasOTPExpired = exports.verifyEmail = exports.verifyOtp = exports.sendOtpViaEmail = exports.createOtp = void 0;
const otpRepository = __importStar(require("./otp.repository"));
const utils_1 = require("../../utils");
const constants_1 = require("../../config/constants");
const user_repository_1 = require("../users/user.repository");
const user_model_1 = require("../users/user.model");
const email_service_1 = require("../../services/email.service");
const createOtp = (body, isRegistered, userType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email: username } = body;
        //TODO:rember to cast string true to boolean
        if (isRegistered === 'true') {
            const user = yield (0, user_repository_1.getUserByEmail)(username, userType);
            if (!user) {
                throw new Error(i18n.__('unrecognized-user'));
            }
        }
        const otp = (0, utils_1.generateOTP)();
        const otpInfo = { username, otp };
        yield otpRepository.deleteOtp(username);
        const createdOtp = yield otpRepository.createOtp(otpInfo);
        //await sendSMS(phoneNumber, i18n.__('otp-message', `${otp}`, constants.OTP_EXPIRATION_TIME));
        return createdOtp;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.createOtp = createOtp;
const sendOtpViaEmail = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = body;
        const phoneNumber = email; //assigning email to phoneNumber variable since it has been used throughout the otp module
        const user = yield (0, user_repository_1.getUserByEmail)(phoneNumber, user_model_1.USER_TYPES.STAFF);
        if (!user) {
            throw new Error(i18n.__('unrecognized-user'));
        }
        const otp = (0, utils_1.generateOTP)();
        const otpInfo = { phoneNumber, otp };
        yield otpRepository.deleteOtp(phoneNumber);
        const createdOtp = yield otpRepository.createOtp(otpInfo);
        yield (0, email_service_1.sendEmail)(email, i18n.__('otp-message', `${otp}`, constants_1.constants.OTP_EXPIRATION_TIME));
        return createdOtp;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.sendOtpViaEmail = sendOtpViaEmail;
const verifyOtp = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const availableOTP = yield otpRepository.getOTP(body);
    if (!availableOTP) {
        throw new Error(i18n.__('unrecognized-otp'));
    }
    ;
    if ((0, exports.hasOTPExpired)(availableOTP.createdAt)) {
        throw new Error(i18n.__('expired-otp'));
    }
    ;
    return otpRepository.verifyOtp(body);
});
exports.verifyOtp = verifyOtp;
const verifyEmail = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const availableOTP = yield otpRepository.getOTP(body);
    if (!availableOTP) {
        throw new Error(i18n.__('unrecognized-otp'));
    }
    ;
    if ((0, exports.hasOTPExpired)(availableOTP.createdAt)) {
        throw new Error(i18n.__('expired-otp'));
    }
    ;
    return otpRepository.verifyOtp(body);
});
exports.verifyEmail = verifyEmail;
const hasOTPExpired = (createdAt) => {
    try {
        let hasExpired = false;
        const now = new Date(Date.now());
        createdAt = new Date(createdAt);
        const diff = (now.getTime() - createdAt.getTime()) / 1000 / 60;
        const minutes = Math.abs(Math.round(diff));
        if (minutes > parseInt(constants_1.constants.OTP_EXPIRATION_TIME)) {
            hasExpired = true;
        }
        return hasExpired;
    }
    catch (e) {
        throw new Error(e.message);
    }
};
exports.hasOTPExpired = hasOTPExpired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vdHAvb3RwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUFrRDtBQUNsRCx1Q0FBeUM7QUFDekMsc0RBQW1EO0FBR25ELDhEQUEwRDtBQUMxRCxvREFBaUQ7QUFDakQsZ0VBQXlEO0FBRWxELE1BQU0sU0FBUyxHQUFHLENBQU8sSUFBUyxFQUFFLFlBQW9CLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQ2pGLElBQUk7UUFDQSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxHQUFHLElBQUksQ0FBQztRQUNoQyw0Q0FBNEM7UUFDNUMsSUFBSSxZQUFZLEtBQUssTUFBTSxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxnQ0FBYyxFQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7YUFDakQ7U0FDSjtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUEsbUJBQVcsR0FBRSxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ2pDLE1BQU0sYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxNQUFNLFVBQVUsR0FBRyxNQUFNLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsOEZBQThGO1FBRTlGLE9BQU8sVUFBVSxDQUFDO0tBQ3JCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5QjtBQUNMLENB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