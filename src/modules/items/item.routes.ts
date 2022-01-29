import express from 'express';
const router = express.Router();
import * as ItemController from './item.controller';
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', isAuthenticated, ItemController.createItem);
router.get('/', ItemController.getItems);
router.get('/:categoryId', isAuthenticated, ItemController.getItemById);
router.patch('/:categoryId', isAuthenticated, ItemController.updateItem);
router.delete('/:categoryId', isAuthenticated, ItemController.deleteItem);

export const ItemRoutes = router;