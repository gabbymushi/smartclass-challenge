import express from 'express';
const router = express.Router();
import * as ConfigController from "./config.controller";
import { isAuthenticated } from '../auth/auth.controller';

router.post('/', isAuthenticated, ConfigController.setConfig);
router.get('/', isAuthenticated, ConfigController.getConfigs);
router.get('/getConfigValue', isAuthenticated, ConfigController.getConfigValue);

export const ConfigRoutes = router;
