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
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const OrderController = __importStar(require("./order.controller"));
const auth_controller_1 = require("../auth/auth.controller");
router.post('/', OrderController.createOrder);
router.get('/', auth_controller_1.isAuthenticated, OrderController.getOrders);
router.patch('/:orderId', auth_controller_1.isAuthenticated, OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);
//router.get('/:orderId', isAuthenticated, OrderController.getOrderById);
exports.OrderRoutes = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvb3JkZXJzL29yZGVyLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsb0VBQXNEO0FBQ3RELDZEQUEwRDtBQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsaUNBQWUsRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsaUNBQWUsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hELHlFQUF5RTtBQUU1RCxRQUFBLFdBQVcsR0FBRyxNQUFNLENBQUMifQ==