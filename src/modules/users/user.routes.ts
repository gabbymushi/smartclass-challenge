import express from 'express';
const router = express.Router();
import * as UserController from './user.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.get('/phone-number', UserController.getUserByPhoneNumber);
router.get('/', isAuthenticated, UserController.getCompanyUsers);
router.post('/', UserController.createUser);
router.post('/invite', UserController.createStaff);

router.patch('/:id([\\dA-Fa-f]+)', isAuthenticated, UserController.updateUser);
router.delete('/:id([\\dA-Fa-f]+)', UserController.deleteUser);
router.get('/:id([\\dA-Fa-f]+)', isAuthenticated, UserController.getUser);

export const UserRoutes = router;