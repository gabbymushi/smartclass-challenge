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
exports.ItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ItemController = __importStar(require("./item.controller"));
const auth_controller_1 = require("../auth/auth.controller");
router.post('/', auth_controller_1.isAuthenticated, ItemController.createItem);
router.get('/', ItemController.getItems);
router.get('/:categoryId', auth_controller_1.isAuthenticated, ItemController.getItemById);
router.patch('/:categoryId', auth_controller_1.isAuthenticated, ItemController.updateItem);
router.delete('/:categoryId', auth_controller_1.isAuthenticated, ItemController.deleteItem);
exports.ItemRoutes = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9pdGVtcy9pdGVtLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsa0VBQW9EO0FBQ3BELDZEQUEwRDtBQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQ0FBZSxFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUNBQWUsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWUsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUNBQWUsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFN0QsUUFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDIn0=