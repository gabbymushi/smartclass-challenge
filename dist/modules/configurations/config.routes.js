"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ConfigController = __importStar(require("./config.controller"));
const auth_controller_1 = require("../auth/auth.controller");
router.post('/', auth_controller_1.isAuthenticated, ConfigController.setConfig);
router.get('/', auth_controller_1.isAuthenticated, ConfigController.getConfigs);
router.get('/getConfigValue', auth_controller_1.isAuthenticated, ConfigController.getConfigValue);
exports.ConfigRoutes = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbmZpZ3VyYXRpb25zL2NvbmZpZy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QixNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLHNFQUF3RDtBQUN4RCw2REFBMEQ7QUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUNBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5RCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxpQ0FBZSxFQUFFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsaUNBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVuRSxRQUFBLFlBQVksR0FBRyxNQUFNLENBQUMifQ==