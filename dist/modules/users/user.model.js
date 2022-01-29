"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.USER_STATUSES = exports.USER_TYPES = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
var USER_TYPES;
(function (USER_TYPES) {
    USER_TYPES["USER"] = "user";
    USER_TYPES["STAFF"] = "staff";
    USER_TYPES["ROOT"] = "root";
})(USER_TYPES = exports.USER_TYPES || (exports.USER_TYPES = {}));
var USER_STATUSES;
(function (USER_STATUSES) {
    USER_STATUSES[USER_STATUSES["INACTIVE"] = 0] = "INACTIVE";
    USER_STATUSES[USER_STATUSES["ACTIVE"] = 1] = "ACTIVE";
    USER_STATUSES[USER_STATUSES["SUSPENDED"] = 2] = "SUSPENDED";
})(USER_STATUSES = exports.USER_STATUSES || (exports.USER_STATUSES = {}));
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
    },
    gender: {
        type: String,
        //required: [true, 'Gender  is required!'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required!'],
        //unique: true,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Role',
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    type: {
        type: String,
        enum: [USER_TYPES],
        default: USER_TYPES.USER,
        index: true
    },
    status: {
        type: Number,
        enum: [USER_STATUSES],
        default: USER_STATUSES.ACTIVE,
        index: true
    },
    firstTimeLoginFlag: {
        type: Number,
        enum: [0, 1],
        default: 0,
        index: true
    }
}, { timestamps: true });
UserSchema.methods = {
    comparePassword(candidatePassword) {
        if (bcryptjs_1.default.compareSync(candidatePassword, this.password)) {
            return true;
        }
        else {
            return false;
        }
    },
    changePassword(password) {
        return this.update({ password: this.hashPassword(password) });
    },
    hashPassword(password) {
        return bcryptjs_1.default.hashSync(password, 10);
    },
    toJSON() {
        return {
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            gender: this.gender,
            email: this.email,
            role: this.role,
            phoneNumber: this.phoneNumber,
            type: this.type,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
};
UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = this.hashPassword(this.password);
    next();
});
// UserSchema.virtual('wallet', {
//     ref: 'Wallet',
//     localField: '_id',
//     foreignField: 'resource',
//     justOne: true,
// });
// UserSchema.virtual('vendorsInfo', {
//     ref: 'VendorUser',
//     localField: '_id',
//     foreignField: 'user',
//     justOne: false,
// });
exports.User = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdUNBQTBEO0FBQzFELHdEQUE4QjtBQUU5QixJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsMkJBQWEsQ0FBQTtJQUNiLDZCQUFlLENBQUE7SUFDZiwyQkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQjtBQUVELElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUNyQix5REFBWSxDQUFBO0lBQ1oscURBQVUsQ0FBQTtJQUNWLDJEQUFhLENBQUE7QUFDakIsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBcUJELE1BQU0sVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBUTtJQUNqQyxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSx5QkFBeUIsQ0FBQztLQUM5QztJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQztLQUM3QztJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osMkNBQTJDO0tBQzlDO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLENBQUM7UUFDN0MsZUFBZTtRQUNmLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxJQUFJLEVB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