import express from 'express';
import { UserRoutes } from './users/user.routes';
import { AuthRoutes } from './auth/auth.routes';
import { isAuthenticated } from './auth/auth.controller'
import { TransactionRoutes } from './transactions/transaction.routes';
import { OrderRoutes } from './orders/order.routes';
import { ItemRoutes } from './items/item.routes';

export const initializeRoutes = (app: express.Application) => {
    app.use('/api/v1/users/', UserRoutes);
    app.use('/api/v1/auth/', AuthRoutes);
    app.use('/api/v1/deals/', TransactionRoutes);
    app.use('/api/v1/items/', ItemRoutes);
    //app.use('/api/v1/orders/', OrderRoutes);

    app.use('/', ItemRoutes);
    app.use('/items/', ItemRoutes);
    app.use('/orders', OrderRoutes);

}