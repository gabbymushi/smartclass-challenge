import express from 'express';
const router = express.Router();
import * as TransactionController from './transaction.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', TransactionController.createTransaction);

export const TransactionRoutes = router;