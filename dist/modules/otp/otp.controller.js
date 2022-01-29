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
exports.verifyEmail = exports.verifyOtp = exports.sendOtpViaEmail = exports.createOtp = void 0;
const otpService = __importStar(require("./otp.service"));
const createOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const isRegistered = req.query.isRegistered;
        const userType = req.query.userType;
        const otp = yield otpService.createOtp(body, isRegistered, userType);
        return res.status(200).json(otp);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.createOtp = createOtp;
const sendOtpViaEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const otp = yield otpService.sendOtpViaEmail(body);
        return res.status(200).json(otp);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.sendOtpViaEmail = sendOtpViaEmail;
const verifyOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber } = req.params;
        const { otp } = req.body;
        const body = { phoneNumber, otp };
        const verifiedOtp = yield otpService.verifyOtp(body);
        return res.status(200).json(verifiedOtp);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.verifyOtp = verifyOtp;
const verifyEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        const verifiedOtp = yield otpService.verifyEmail({ email, otp });
        return res.status(200).json(verifiedOtp);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.verifyEmail = verifyEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vdHAvb3RwLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBEQUE0QztBQUVyQyxNQUFNLFNBQVMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzRCxJQUFJO1FBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNyQixNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQWlDLENBQUM7UUFDakUsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUE2QixDQUFDO1FBRXpELE1BQU0sR0FBRyxHQUFHLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ3RCLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFmWSxRQUFBLFNBQVMsYUFlckI7QUFFTSxNQUFNLGVBQWUsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNqRSxJQUFJO1FBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUVyQixNQUFNLEdBQUcsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU87U0FDOUIsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWJZLFFBQUEsZUFBZSxtQkFhM0I7QUFFTSxNQUFNLFNBQVMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzRCxJQUFJO1FBQ0EsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFdkMsTUFBTSxXQUFXLEdBQUcsTUFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ3RCLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFmWSxRQUFBLFNBQVMsYUFlckI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM3RCxJQUFJO1FBRUEsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRWhDLE1BQU0sV0FBVyxHQUFHLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ3RCLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFkWSxRQUFBLFdBQVcsZUFjdkIifQ==