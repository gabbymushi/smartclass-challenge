import { Schema, Document, model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export enum USER_TYPES {
    USER = 'user',
    STAFF = 'staff',
    ROOT = 'root'
}

export enum USER_STATUSES {
    INACTIVE = 0,
    ACTIVE = 1,
    SUSPENDED = 2
}
export interface IUser extends Document {
    firstName?: string,
    middleName?: string,
    lastName?: string,
    gender?: string,
    phoneNumber?: string,
    email?: string,
    role?: string,
    password: string,
    status: number,
    firstTimeLoginFlag: number,
    type?: string,
    createdAt?: Date,
    updatedAt?: Date,
    comparePassword(candidatePassword: string): boolean,
    changePassword(password: string): any,
    hashPassword(password: string): string,
    toAuthJSON(): object,
}

const UserSchema = new Schema<IUser>({
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
        type: Schema.Types.ObjectId,
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
},
    { timestamps: true }
);

UserSchema.methods = {
    comparePassword(candidatePassword: string): boolean {
        if (bcrypt.compareSync(candidatePassword, this.password)) {
            return true;
        } else {
            return false;
        }
    },
    changePassword(password: string) {
        return this.update({ password: this.hashPassword(password) })
    },
    hashPassword(password: string): string {
        return bcrypt.hashSync(password, 10);
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
}

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


export const User = model<IUser>('User', UserSchema);