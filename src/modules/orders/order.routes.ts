import express from 'express';
const router = express.Router();
import * as OrderController from './order.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', OrderController.createOrder);
router.get('/', isAuthenticated, OrderController.getOrders);
router.patch('/:orderId', isAuthenticated, OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);
//router.get('/:orderId', isAuthenticated, OrderController.getOrderById);

export const OrderRoutes = router;