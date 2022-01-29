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
exports.staffForgotPassword = exports.forgotPassword = exports.changePassword = exports.isAuthenticated = exports.adminLogin = exports.login = void 0;
const user_model_1 = require("../users/user.model");
const user_service_1 = require("../users/user.service");
const authService = __importStar(require("./auth.service"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield authService.login(body);
        return res.status(user.status).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.login = login;
const adminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield authService.adminLogin(body);
        return res.status(user.status).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.adminLogin = adminLogin;
const isAuthenticated = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        req.authUser = authService.isAuthenticated(authorization);
        next();
    }
    catch (e) {
        return res.status(401).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
};
exports.isAuthenticated = isAuthenticated;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, oldPassword } = req.body;
        const { email, type, _id } = req.authUser;
        const auth = yield authService.changePassword(password, oldPassword, email, type);
        (0, user_service_1.updateUser)(_id, { firstTimeLoginFlag: 1 });
        return res.status(auth.status).json({
            userMessage: auth.userMessage,
            developerMessage: auth.userMessage
        });
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.changePassword = changePassword;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, phoneNumber, type } = req.body;
        const user = yield (0, user_service_1.getUserByPhoneNumber)(phoneNumber, type);
        if (!user) {
            throw new Error('User with that phone number is not found.');
        }
        (0, user_service_1.updateUser)(user._id, { password });
        return res.status(200).json({
            userMessage: 'Password changed successfully.'
        });
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.forgotPassword = forgotPassword;
const staffForgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        const user = yield (0, user_service_1.getUserByEmail)(email, user_model_1.USER_TYPES.STAFF);
        if (!user) {
            throw new Error('Staff with that email is not found.');
        }
        (0, user_service_1.updateUser)(user._id, { password });
        return res.status(200).json({
            userMessage: 'Password changed successfully.'
        });
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.staffForgotPassword = staffForgotPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUErQztBQUMvQyx3REFBdUY7QUFDdkYsNERBQThDO0FBRXZDLE1BQU0sS0FBSyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3ZELElBQUk7UUFDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU87U0FDOUIsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsS0FBSyxTQVlqQjtBQUVNLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVELElBQUk7UUFDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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