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
exports.getUserByPhoneNumber = exports.updateUser = exports.deleteUser = exports.getUser = exports.getCompanyUsers = exports.createStaff = exports.createUser = void 0;
const userService = __importStar(require("./user.service"));
const constants_1 = require("../../config/constants");
const user_model_1 = require("./user.model");
const { PERPAGE } = constants_1.constants;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield userService.createUser(body);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.createUser = createUser;
const createStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield userService.createStaff(body);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.createStaff = createStaff;
const getCompanyUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyId } = req.params;
        let { role, searchQuery } = req.query;
        const currentPage = req.query.currentPage || 1;
        const perPage = parseInt(PERPAGE);
        const offset = (perPage * currentPage) - perPage;
        const { data, totalRows } = yield userService.getCompanyUsers(companyId, offset, perPage, searchQuery, role);
        const metadata = {};
        const userMessage = "Staffs retrieved successfully...";
        const pagination = {
            currentPage,
            perPage,
            totalPages: Math.ceil(totalRows / perPage),
            totalRows
        };
        return res.status(200).json({ userMessage, pagination, data });
    }
    catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
});
exports.getCompanyUsers = getCompanyUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.getUser(id);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.deleteUser(id);
        //logEvent({ request: req, activity: `Deleted user ${user?.firstName ?? user?.displayName} whose phone number is ${user?.phoneNumber} ` });
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = yield userService.updateUser(id, body);
        //logEvent({ request: req, activity: `Deleted user ${user?.firstName ?? user?.displayName} whose phone number is ${user?.phoneNumber} ` });
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
});
exports.updateUser = updateUser;
const getUserByPhoneNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phoneNumber = req.query.phoneNumber;
        const user = yield userService.getUserByPhoneNumber(phoneNumber, user_model_1.USER_TYPES.USER);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
});
exports.getUserByPhoneNumber = getUserByPhoneNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0REFBOEM7QUFDOUMsc0RBQW1EO0FBQ25ELDZDQUEwQztBQUUxQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcscUJBQVMsQ0FBQztBQUV2QixNQUFNLFVBQVUsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RCxJQUFJO1FBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUVyQixNQUFNLElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU87U0FDOUIsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWJZLFFBQUEsVUFBVSxjQWF0QjtBQUVNLE1BQU0sV0FBVyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzdELElBQUk7UUFDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBRXJCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTztZQUN0QixnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTztTQUM5QixDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBYlksUUFBQSxXQUFXLGVBYXZCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakUsSUFBSTtRQUNBLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQWdDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFakQsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBZ0MsRUFBRSxJQUF5QixDQUFFLENBQUM7UUFFeEosTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sV0FBVyxHQUFHLGtDQUFrQyxDQUFDO1FBQ3ZELE1BQU0sVUFBVSxHQUFHO1lBQ2YsV0FBVztZQUNYLE9BQU87WUFDUCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQzFDLFNBQVM7U0FDWixDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNsRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUExQlksUUFBQSxlQUFlLG1CQTBCM0I7QUFFTSxNQUFNLE9BQU8sR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN6RCxJQUFJO1FBQ0EsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsV0FBVyxFQUFFLG9EQUFvRDtZQUNqRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTztTQUM5QixDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBWlksUUFBQSxPQUFPLFdBWW5CO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUQsSUFBSTtRQUNBLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5QywySUFBMkk7UUFFM0ksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFmWSxRQUFBLFVBQVUsY0FldEI7QUFFTSxNQUFNLFVBQVUsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RCxJQUFJO1FBQ0EsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUVyQixNQUFNLElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBELDJJQUEySTtRQUUzSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU87U0FDOUIsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWhCWSxRQUFBLFVBQVUsY0FnQnRCO0FBRU0sTUFBTSxvQkFBb0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN0RSxJQUFJO1FBQ0EsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFnQyxDQUFDO1FBRS9ELE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLG9CQUFvQixDQUFDLFdBQVksRUFBRSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5GLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ3RCLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO1NBQzlCLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFiWSxRQUFBLG9CQUFvQix3QkFhaEMifQ==