import express from 'express';
const router = express.Router();
import * as AuthController from './auth.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/login', AuthController.login);
router.post('/staff/login', AuthController.adminLogin);
router.post('/staff/forgot-password', AuthController.staffForgotPassword);
router.post('/change-password', isAuthenticated, AuthController.changePassword);
router.post('/forgot-password', AuthController.forgotPassword);

export const AuthRoutes = router;