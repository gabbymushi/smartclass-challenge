import { getUserByEmail } from '../users/user.repository';
import { IUser, USER_TYPES, USER_STATUSES } from '../users/user.model';
import jwt from 'jsonwebtoken';
import { constants } from '../../config/constants';

export const login = async (body: any) => {
    try {
        let token = null;
        let response;

        const { email, password } = body;

        const user = await getUserByEmail(email, USER_TYPES.USER);

        if (user && user.comparePassword(password) && user.type === USER_TYPES.USER) {
            token = await getUserAuthToken(user);
            response = { user, token, status: 200 };
        } else {
            response = { userMessage: i18n.__('wrong-password'), user: {}, token, status: 401 };
        }

        return response;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const adminLogin = async (body: any) => {
    try {
        let token = null;
        let response;
        const { email, password } = body;

        const user = await getUserByEmail(email, [USER_TYPES.ROOT, USER_TYPES.STAFF]);

        if (user && user.comparePassword(password) && (user.type === USER_TYPES.ROOT || user.type === USER_TYPES.STAFF)) {
            token = await getUserAuthToken(user);
            response = { user, token, status: 200 };
        } else {
            response = { userMessage: i18n.__('invalid-credentials'), user: {}, token, status: 401 };
        }

        return response;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const isAuthenticated = (authorization: any) => {
    if (authorization === undefined || authorization === '') {
        throw new Error('Authorization scheme not specified');
    }

    const tokenInfo = authorization.split(" ");

    if (tokenInfo[0] !== constants.AUTHORIZATION_SCHEME) {
        throw new Error('Incorrect authorization scheme.')
    }

    const token = tokenInfo[1];
    const user = jwt.verify(token, constants.JWT_SECRET);
    return user;
}

export const changePassword = async (password: string, oldPassword: string, email: string, type: string) => {
    try {
        let response;

        const user = await getUserByEmail(email, type);

        if (user && user.comparePassword(oldPassword)) {
            await user.changePassword(password);
            response = { userMessage: i18n.__('password-changed'), status: 200 };
        } else {
            response = { userMessage: i18n.__('wrong-old-password'), status: 401 };
        }

        return response;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getUserAuthToken = async (user: IUser) => {
    return jwt.sign(user.toJSON(), constants.JWT_SECRET);
}