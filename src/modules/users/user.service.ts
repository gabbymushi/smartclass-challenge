import { User, USER_STATUSES, USER_TYPES } from './user.model';
import * as userRepository from './user.repository';
import { sendEmail } from '../../services/email.service';
import { getUserAuthToken } from '../auth/auth.service';
import { constants } from '../../config/constants';

const { EMAIL_URL, EMAIL_SENDER, APP_BASE_URL } = constants;

export const createUser = async (body: any) => {
    const { email } = body;

    if (await userRepository.getUserByEmail(email, USER_TYPES.USER)) {
        throw new Error('User already exists');
    }

    const user = await userRepository.createUser(body);


    return user;
}

export const createStaff = async (body: any) => {
    const session = await User.startSession();
    session.startTransaction();

    try {
        body.type = USER_TYPES.STAFF;

        if (await userRepository.getUserByEmail(body.email, USER_TYPES.STAFF)) {
            throw new Error(i18n.__('email-exists'));
        }

        const password = Math.random().toString(36).substr(2, 16).toUpperCase();
        body.password = password;

        await sendEmail(body.email, i18n.__('welcome-staff', body.email, password));

        const user = await userRepository.createUserWithDBTransaction(body, session);

        await session.commitTransaction();
        session.endSession();

        return user;
    } catch (e) {
        await session.abortTransaction();
        session.endSession();

        throw new Error(e.message);
    }
}

export const getCompanyUsers = (companyId: string, offset: number, perPage: number, keyword: string, role: string,) => {
    return userRepository.getCompanyUsers(companyId, offset, perPage, keyword, role);
}

export const getUser = (userId: any) => {
    return userRepository.getUser(userId);
}

export const deleteUser = (userId: string) => {
    return userRepository.deleteUser(userId);
}

export const updateUser = async (userId: string, body: any) => {
    return userRepository.updateUser(userId, body);
}

export const deactivate = async (userId: string) => {
    const user = await userRepository.changeUserStatus(userId, { status: USER_STATUSES.INACTIVE });

    return { user, token: await getUserAuthToken(user!) }
}

export const activate = async (userId: string) => {
    const user = await userRepository.changeUserStatus(userId, { status: USER_STATUSES.ACTIVE });

    return { user, token: await getUserAuthToken(user!) }
}

export const getUserByPhoneNumber = (phoneNumber: string, userType: string) => {
    return userRepository.getUserByPhoneNumber(phoneNumber, userType);
}

export const getUserByEmail = (email: string, userType: string) => {
    return userRepository.getUserByEmail(email, userType);
}