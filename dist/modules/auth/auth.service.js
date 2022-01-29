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
exports.getUserAuthToken = exports.changePassword = exports.isAuthenticated = exports.adminLogin = exports.login = void 0;
const user_repository_1 = require("../users/user.repository");
const user_model_1 = require("../users/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../../config/constants");
const login = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = null;
        let response;
        const { email, password } = body;
        const user = yield (0, user_repository_1.getUserByEmail)(email, user_model_1.USER_TYPES.USER);
        if (user && user.comparePassword(password) && user.type === user_model_1.USER_TYPES.USER) {
            token = yield (0, exports.getUserAuthToken)(user);
            response = { user, token, status: 200 };
        }
        else {
            response = { userMessage: i18n.__('wrong-password'), user: {}, token, status: 401 };
        }
        return response;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.login = login;
const adminLogin = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = null;
        let response;
        const { email, password } = body;
        const user = yield (0, user_repository_1.getUserByEmail)(email, [user_model_1.USER_TYPES.ROOT, user_model_1.USER_TYPES.STAFF]);
        if (user && user.comparePassword(password) && (user.type === user_model_1.USER_TYPES.ROOT || user.type === user_model_1.USER_TYPES.STAFF)) {
            token = yield (0, exports.getUserAuthToken)(user);
            response = { user, token, status: 200 };
        }
        else {
            response = { userMessage: i18n.__('invalid-credentials'), user: {}, token, status: 401 };
        }
        return response;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.adminLogin = adminLogin;
const isAuthenticated = (authorization) => {
    if (authorization === undefined || authorization === '') {
        throw new Error('Authorization scheme not specified');
    }
    const tokenInfo = authorization.split(" ");
    if (tokenInfo[0] !== constants_1.constants.AUTHORIZATION_SCHEME) {
        throw new Error('Incorrect authorization scheme.');
    }
    const token = tokenInfo[1];
    const user = jsonwebtoken_1.default.verify(token, constants_1.constants.JWT_SECRET);
    return user;
};
exports.isAuthenticated = isAuthenticated;
const changePassword = (password, oldPassword, email, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response;
        const user = yield (0, user_repository_1.getUserByEmail)(email, type);
        if (user && user.comparePassword(oldPassword)) {
            yield user.changePassword(password);
            response = { userMessage: i18n.__('password-changed'), status: 200 };
        }
        else {
            response = { userMessage: i18n.__('wrong-old-password'), status: 401 };
        }
        return response;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.changePassword = changePassword;
const getUserAuthToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign(user.toJSON(), constants_1.constants.JWT_SECRET);
});
exports.getUserAuthToken = getUserAuthToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQTBEO0FBQzFELG9EQUF1RTtBQUN2RSxnRUFBK0I7QUFDL0Isc0RBQW1EO0FBRTVDLE1BQU0sS0FBSyxHQUFHLENBQU8sSUFBUyxFQUFFLEVBQUU7SUFDckMsSUFBSTtRQUNBLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLFFBQVEsQ0FBQztRQUViLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRWpDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxnQ0FBYyxFQUFDLEtBQUssRUFBRSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyx1QkFBVSxDQUFDLElBQUksRUFBRTtZQUN6RSxLQUFLLEdBQUcsTUFBTSxJQUFBLHdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDSCxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUN2RjtRQUVELE9BQU8sUUFBUSxDQUFDO0tBQ25CO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsQ0FB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