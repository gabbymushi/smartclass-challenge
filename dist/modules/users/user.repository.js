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
exports.userCount = exports.newUsers = exports.changeUserStatus = exports.getUserByEmail = exports.getUserByPhoneNumber = exports.updateUserWithSession = exports.updateUser = exports.deleteUser = exports.getUser = exports.getCompanyUsers = exports.createUser = exports.createUserWithDBTransaction = void 0;
const user_model_1 = require("./user.model");
const createUserWithDBTransaction = (body, session) => __awaiter(void 0, void 0, void 0, function* () {
    let user = (yield user_model_1.User.create([body], { session }))[0];
    return user.populate('role').execPopulate();
});
exports.createUserWithDBTransaction = createUserWithDBTransaction;
const createUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_model_1.User.create(body);
    return user.populate('role').execPopulate();
});
exports.createUser = createUser;
const getCompanyUsers = (companyId, offset, perPage, searchQuery, role = '') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let condition = {};
        const search = new RegExp('.*' + searchQuery + '.*', 'i');
        if (role !== undefined && role !== '') {
            condition.role = role;
        }
        if (searchQuery !== undefined && searchQuery !== '') {
            condition.$or = [{ 'semifullName': { $regex: search } }, { 'fullName': { $regex: search } },
                { 'phoneNumber': { $regex: search } }];
        }
        const users = yield user_model_1.User.aggregate([
            { $lookup: { from: 'roles', localField: 'role', foreignField: '_id', as: 'role' } },
            {
                $addFields: {
                    'semifullName': { $concat: ['$firstName', ' ', '$lastName'] },
                    'fullName': { $concat: ['$firstName', ' ', '$middleName', ' ', '$lastName'] }
                },
            },
            {
                $match: Object.assign(Object.assign({ company: companyId }, condition), { type: user_model_1.USER_TYPES.USER }),
            },
            { $sort: { firstName: -1 } },
            {
                $facet: {
                    metadata: [{ $count: "total" }],
                    data: [{ $skip: offset }, { $limit: perPage }],
                },
            },
        ]);
        if (users[0].data.length === 0) {
            return { users: [], count: 0 };
        }
        return { data: users[0].data, totalRows: users[0].metadata[0].total };
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getCompanyUsers = getCompanyUsers;
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.findOne({ _id: userId });
        return user;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getUser = getUser;
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.findOneAndDelete({ _id: userId });
        return user;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.deleteUser = deleteUser;
const updateUser = (userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let hasPasswordChanged = false;
        const { password } = body;
        if (password !== undefined) {
            hasPasswordChanged = true;
        }
        const user = yield user_model_1.User.findOneAndUpdate({ _id: userId }, Object.assign({}, body), { new: true })
            .populate('role');
        if (hasPasswordChanged && user) {
            yield user.changePassword(password);
        }
        return user;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.updateUser = updateUser;
const updateUserWithSession = (userId, body, session) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOneAndUpdate({ _id: userId }, Object.assign({}, body), { new: true, session })
        .populate('role');
    return user;
});
exports.updateUserWithSession = updateUserWithSession;
const getUserByPhoneNumber = (phoneNumber, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userType = { type };
        if (Array.isArray(type)) {
            userType.type = { $in: type };
        }
        const user = yield user_model_1.User.findOne(Object.assign({ phoneNumber }, userType));
        return user;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getUserByPhoneNumber = getUserByPhoneNumber;
const getUserByEmail = (email, type) => __awaiter(void 0, void 0, void 0, function* () {
    const userType = { type };
    if (Array.isArray(type)) {
        userType.type = { $in: type };
    }
    return user_model_1.User.findOne(Object.assign({ email }, userType))
        .populate('company');
});
exports.getUserByEmail = getUserByEmail;
const changeUserStatus = (userId, body) => {
    return user_model_1.User.findOneAndUpdate({ _id: userId }, Object.assign({}, body), { new: true });
};
exports.changeUserStatus = changeUserStatus;
const newUsers = (startDate, endDate, country) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let condition = {};
        if (country !== undefined && country !== '') {
            condition.country = country;
        }
        const newUsers = yield user_model_1.User.find(Object.assign(Object.assign({}, condition), { type: user_model_1.USER_TYPES.USER, createdAt: { $gt: endDate, $lte: startDate } }))
            .sort({ createdAt: -1 });
        return newUsers;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.newUsers = newUsers;
const userCount = (fromDate, toDate, country) => {
    toDate = new Date(toDate);
    return user_model_1.User.countDocuments({ type: user_model_1.USER_TYPES.USER, country, createdAt: { $gte: fromDate, $lte: new Date(toDate.setDate(toDate.getDate() + 1)) } });
};
exports.userCount = userCount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlci5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDZDQUFzRTtBQUUvRCxNQUFNLDJCQUEyQixHQUFHLENBQU8sSUFBVyxFQUFFLE9BQXNCLEVBQUUsRUFBRTtJQUNyRixJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0saUJBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7QUFDL0MsQ0FBQyxDQUFBLENBQUE7QUFKWSxRQUFBLDJCQUEyQiwrQkFJdkM7QUFFTSxNQUFNLFVBQVUsR0FBRyxDQUFPLElBQVcsRUFBRSxFQUFFO0lBQzVDLElBQUksSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO0FBQy9DLENBQUMsQ0FBQSxDQUFBO0FBSlksUUFBQSxVQUFVLGNBSXRCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBTyxTQUFpQixFQUFFLE1BQWMsRUFBRSxPQUFlLEVBQUUsV0FBbUIsRUFBRSxPQUFlLEVBQUUsRUFBRSxFQUFFO0lBQ2hJLElBQUk7UUFDQSxJQUFJLFNBQVMsR0FBUSxFQUFFLENBQUM7UUFFeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUQsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDbkMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFJLFdBQVcsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUNqRCxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDM0YsRUFBRSxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxpQkFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQixFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuRjtnQkFDSSxVQUFVLEVBQUU7b0JBQ1IsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRTtvQkFDN0QsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFO2lCQUNoRjthQUNKO1lBQ0Q7Z0JBQ0ksTUFBTSxnQ0FDRixPQUFPLEVBQUUsU0FBUyxJQUNmLFNBQVMsS0FBRSxJQUFJLEVBQUUsdUJBQVUsQ0FBQyxJQUFJLEdBQ3RDO2FBQ0o7WUFDRCxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzVCO2dCQUNJLE1BQU0sRUFBRTtvQkFDSixRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7aUJBQ2pEO2FBQ0o7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDbEM7UUFFRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDekU7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUE5Q1ksUUFBQSxlQUFlLG1CQThDM0I7QUFFTSxNQUFNLE9BQU8sR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQzVDLElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVJZLFFBQUEsT0FBTyxXQVFuQjtBQUVNLE1BQU0sVUFBVSxHQUFHLENBQU8sTUFBYyxFQUFFLEVBQUU7SUFDL0MsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTFELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLFVBQVUsY0FRdEI7QUFFTSxNQUFNLFVBQVUsR0FBRyxDQUFPLE1BQWMsRUFBRSxJQUFXLEVBQUUsRUFBRTtJQUM1RCxJQUFJO1FBQ0EsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDL0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsa0JBQWtCLEdBQUcsSUFBSSxDQUFBO1NBQzVCO1FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxvQkFBTyxJQUFJLEdBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDaEYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLElBQUksa0JBQWtCLElBQUksSUFBSSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFwQlksUUFBQSxVQUFVLGNBb0J0QjtBQUVNLE1BQU0scUJBQXFCLEdBQUcsQ0FBTyxNQUFjLEVBQUUsSUFBVyxFQUFFLE9BQXNCLEVBQUUsRUFBRTtJQUMvRixNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLG9CQUFPLElBQUksR0FBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDekYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXRCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSxDQUFBO0FBTFksUUFBQSxxQkFBcUIseUJBS2pDO0FBRU0sTUFBTSxvQkFBb0IsR0FBRyxDQUFPLFdBQW1CLEVBQUUsSUFBUyxFQUFFLEVBQUU7SUFDekUsSUFBSTtRQUNBLE1BQU0sUUFBUSxHQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUE7U0FDaEM7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFJLENBQUMsT0FBTyxpQkFBRyxXQUFXLElBQUssUUFBUSxFQUFHLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQWRZLFFBQUEsb0JBQW9CLHdCQWNoQztBQUVNLE1BQU0sY0FBYyxHQUFHLENBQU8sS0FBYSxFQUFFLElBQVMsRUFBRSxFQUFFO0lBQzdELE1BQU0sUUFBUSxHQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFFL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUE7S0FDaEM7SUFFRCxPQUFPLGlCQUFJLENBQUMsT0FBTyxpQkFBRyxLQUFLLElBQUssUUFBUSxFQUFHO1NBQ3RDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQTtBQVRZLFFBQUEsY0FBYyxrQkFTMUI7QUFFTSxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBYyxFQUFFLElBQVMsRUFBRSxFQUFFO0lBQzFELE9BQU8saUJBQUksQ0FBQyxnQkFBZ0IsQ0FDeEIsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLG9CQUNWLElBQUksR0FDVCxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDaEIsQ0FBQztBQUNOLENBQUMsQ0FBQTtBQU5ZLFFBQUEsZ0JBQWdCLG9CQU01QjtBQUVNLE1BQU0sUUFBUSxHQUFHLENBQU8sU0FBZSxFQUFFLE9BQWEsRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUM5RSxJQUFJO1FBQ0EsSUFBSSxTQUFTLEdBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3pDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQy9CO1FBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBSSxDQUFDLElBQUksaUNBQU0sU0FBUyxLQUFFLElBQUksRUFBRSx1QkFBVSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBRzthQUNsSCxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sUUFBUSxDQUFDO0tBQ25CO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBZlksUUFBQSxRQUFRLFlBZXBCO0FBRU0sTUFBTSxTQUFTLEdBQUcsQ0FBQyxRQUFjLEVBQUUsTUFBWSxFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxQixPQUFPLGlCQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hKLENBQUMsQ0FBQTtBQUpZLFFBQUEsU0FBUyxhQUlyQiJ9