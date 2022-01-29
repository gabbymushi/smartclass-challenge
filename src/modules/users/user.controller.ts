import { Request, Response } from 'express';
import * as userService from './user.service';
import { constants } from '../../config/constants';
import { USER_TYPES } from './user.model';

const { PERPAGE } = constants;

export const createUser = async (req: Request, res: Response) => {
    try {
        const { body } = req;

        const user = await userService.createUser(body);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const createStaff = async (req: Request, res: Response) => {
    try {
        const { body } = req;

        const user = await userService.createStaff(body);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}

export const getCompanyUsers = async (req: Request, res: Response) => {
    try {
        const { companyId } = req.params;
        let { role, searchQuery } = req.query;
        const currentPage = req.query.currentPage as unknown as number || 1;
        const perPage = parseInt(PERPAGE);
        const offset = (perPage * currentPage) - perPage;

        const { data, totalRows } = await userService.getCompanyUsers(companyId, offset, perPage, searchQuery as unknown as string, role as unknown as string,);

        const metadata = {};
        const userMessage = "Staffs retrieved successfully...";
        const pagination = {
            currentPage,
            perPage,
            totalPages: Math.ceil(totalRows / perPage),
            totalRows
        };

        return res.status(200).json({ userMessage, pagination, data });
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userService.getUser(id);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await userService.deleteUser(id);

        //logEvent({ request: req, activity: `Deleted user ${user?.firstName ?? user?.displayName} whose phone number is ${user?.phoneNumber} ` });

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const user = await userService.updateUser(id, body);

        //logEvent({ request: req, activity: `Deleted user ${user?.firstName ?? user?.displayName} whose phone number is ${user?.phoneNumber} ` });

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: 'Oops... Something went wrong, contact the admin...',
            developerMessage: e.message
        });
    }
}

export const getUserByPhoneNumber = async (req: Request, res: Response) => {
    try {
        const phoneNumber = req.query.phoneNumber as unknown as string;

        const user = await userService.getUserByPhoneNumber(phoneNumber!, USER_TYPES.USER);

        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({
            userMessage: e.message,
            developerMessage: e.message
        });
    }
}