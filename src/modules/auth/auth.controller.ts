import {NextFunction, Request, Response} from 'express';
import {USER_TYPES} from '../users/user.model';
import {getUserByEmail, getUserByPhoneNumber, updateUser} from '../users/user.service';
import * as authService from './auth.service';

export const login = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const user = await authService.login(body);

        return res.status(user.status).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const adminLogin = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const user = await authService.adminLogin(body);

        return res.status(user.status).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const isAuthenticated = (req: any, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        req.authUser = authService.isAuthenticated(authorization);

        next();
    } catch (e) {
        return res.status(401).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const changePassword = async (req: any, res: Response) => {
    try {
        const { password, oldPassword } = req.body;
        const { email, type, _id } = req.authUser;

        const auth = await authService.changePassword(password, oldPassword, email, type);
        updateUser(_id, { firstTimeLoginFlag: 1 });

        return res.status(auth.status).json({
            userMessage: auth.userMessage,
            developerMessage: auth.userMessage
        });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const forgotPassword = async (req: any, res: Response) => {
    try {
        const { password, phoneNumber, type } = req.body;

        const user = await getUserByPhoneNumber(phoneNumber, type);

        if (!user) {
            throw new Error('User with that phone number is not found.');
        }

        updateUser(user._id, { password });

        return res.status(200).json({
            userMessage: 'Password changed successfully.'
        });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const staffForgotPassword = async (req: any, res: Response) => {
    try {
        const { password, email } = req.body;

        const user = await getUserByEmail(email, USER_TYPES.STAFF);

        if (!user) {
            throw new Error('Staff with that email is not found.');
        }

        updateUser(user._id, { password });

        return res.status(200).json({
            userMessage: 'Password changed successfully.'
        });
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}