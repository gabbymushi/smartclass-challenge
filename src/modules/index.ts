import express from 'express';
import { UserRoutes } from './users/user.routes';
import { AuthRoutes } from './auth/auth.routes';
import { ConfigRoutes } from './configurations/config.routes';
import {isAuthenticated} from './auth/auth.controller'
import { TransactionRoutes } from './transactions/transaction.routes';

export const initializeRoutes = (app: express.Application) => {
    app.use('/api/v1/users/', UserRoutes);
    app.use('/api/v1/auth/', AuthRoutes);
    app.use('/api/v1/configs/', ConfigRoutes);
    app.use('/api/v1/deals/', TransactionRoutes);
}