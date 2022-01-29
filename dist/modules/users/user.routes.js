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
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UserController = __importStar(require("./user.controller"));
const auth_controller_1 = require("../auth/auth.controller");
router.get('/phone-number', UserController.getUserByPhoneNumber);
router.get('/', auth_controller_1.isAuthenticated, UserController.getCompanyUsers);
router.post('/', UserController.createUser);
router.post('/invite', UserController.createStaff);
router.patch('/:id([\\dA-Fa-f]+)', auth_controller_1.isAuthenticated, UserController.updateUser);
router.delete('/:id([\\dA-Fa-f]+)', UserController.deleteUser);
router.get('/:id([\\dA-Fa-f]+)', auth_controller_1.isAuthenticated, UserController.getUser);
exports.UserRoutes = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VyLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsa0VBQW9EO0FBQ3BELDZEQUEwRDtBQUUxRCxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxpQ0FBZSxFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsaUNBQWUsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxpQ0FBZSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3RCxRQUFBLFVBQVUsR0FBRyxNQUFNLENBQUMifQ==