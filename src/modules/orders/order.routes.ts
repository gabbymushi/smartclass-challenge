import express from 'express';
const router = express.Router();
import * as OrderController from './order.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/complete', OrderController.completeOrder);
router.post('/', OrderController.createOrder);
router.get('/view', OrderController.getOrders);
router.patch('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);
router.get('/items/:id', OrderController.createOrderPage);
router.get('/:id/complete/', OrderController.completeOrderPage);

export const OrderRoutes = router;