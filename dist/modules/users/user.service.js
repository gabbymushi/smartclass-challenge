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
exports.getUserByEmail = exports.getUserByPhoneNumber = exports.activate = exports.deactivate = exports.updateUser = exports.deleteUser = exports.getUser = exports.getCompanyUsers = exports.createStaff = exports.createUser = void 0;
const user_model_1 = require("./user.model");
const userRepository = __importStar(require("./user.repository"));
const email_service_1 = require("../../services/email.service");
const auth_service_1 = require("../auth/auth.service");
const constants_1 = require("../../config/constants");
const { EMAIL_URL, EMAIL_SENDER, APP_BASE_URL } = constants_1.constants;
const createUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = body;
    if (yield userRepository.getUserByEmail(email, user_model_1.USER_TYPES.USER)) {
        throw new Error('User already exists');
    }
    const user = yield userRepository.createUser(body);
    return user;
});
exports.createUser = createUser;
const createStaff = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield user_model_1.User.startSession();
    session.startTransaction();
    try {
        body.type = user_model_1.USER_TYPES.STAFF;
        if (yield userRepository.getUserByEmail(body.email, user_model_1.USER_TYPES.STAFF)) {
            throw new Error(i18n.__('email-exists'));
        }
        const password = Math.random().toString(36).substr(2, 16).toUpperCase();
        body.password = password;
        yield (0, email_service_1.sendEmail)(body.email, i18n.__('welcome-staff', body.email, password));
        const user = yield userRepository.createUserWithDBTransaction(body, session);
        yield session.commitTransaction();
        session.endSession();
        return user;
    }
    catch (e) {
        yield session.abortTransaction();
        session.endSession();
        throw new Error(e.message);
    }
});
exports.createStaff = createStaff;
const getCompanyUsers = (companyId, offset, perPage, keyword, role) => {
    return userRepository.getCompanyUsers(companyId, offset, perPage, keyword, role);
};
exports.getCompanyUsers = getCompanyUsers;
const getUser = (userId) => {
    return userRepository.getUser(userId);
};
exports.getUser = getUser;
const deleteUser = (userId) => {
    return userRepository.deleteUser(userId);
};
exports.deleteUser = deleteUser;
const updateUser = (userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    return userRepository.updateUser(userId, body);
});
exports.updateUser = updateUser;
const deactivate = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.changeUserStatus(userId, { status: user_model_1.USER_STATUSES.INACTIVE });
    return { user, token: yield (0, auth_service_1.getUserAuthToken)(user) };
});
exports.deactivate = deactivate;
const activate = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.changeUserStatus(userId, { status: user_model_1.USER_STATUSES.ACTIVE });
    return { user, token: yield (0, auth_service_1.getUserAuthToken)(user) };
});
exports.activate = activate;
const getUserByPhoneNumber = (phoneNumber, userType) => {
    return userRepository.getUserByPhoneNumber(phoneNumber, userType);
};
exports.getUserByPhoneNumber = getUserByPhoneNumber;
const getUserByEmail = (email, userType) => {
    return userRepository.getUserByEmail(email, userType);
};
exports.getUserByEmail = getUserByEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0Q7QUFDL0Qsa0VBQW9EO0FBQ3BELGdFQUF5RDtBQUN6RCx1REFBd0Q7QUFDeEQsc0RBQW1EO0FBRW5ELE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxHQUFHLHFCQUFTLENBQUM7QUFFckQsTUFBTSxVQUFVLEdBQUcsQ0FBTyxJQUFTLEVBQUUsRUFBRTtJQUMxQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRXZCLElBQUksTUFBTSxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSx1QkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUMxQztJQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUduRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUEsQ0FBQTtBQVhZLFFBQUEsVUFBVSxjQVd0QjtBQUVNLE1BQU0sV0FBVyxHQUFHLENBQU8sSUFBUyxFQUFFLEVBQUU7SUFDM0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRTNCLElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUFVLENBQUMsS0FBSyxDQUFDO1FBRTdCLElBQUksTUFBTSxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsdUJBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRSxNQUFNLElBQUksS0FB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