"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewaresConfig = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_useragent_1 = __importDefault(require("express-useragent"));
dotenv_1.default.config();
const middlewaresConfig = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('dev'));
    app.use((0, helmet_1.default)());
    app.use(express_1.default.json());
    app.use(express_useragent_1.default.express());
    //check api status
    app.get('/', (_, res) => {
        res.status(200).send('ok');
    });
};
exports.middlewaresConfig = middlewaresConfig;
//export const I18n=i18n;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QixvREFBNEI7QUFDNUIsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1QixvREFBNkI7QUFDN0IsMEVBQTBDO0FBRTFDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFVCxNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBd0IsRUFBRSxFQUFFO0lBQzFELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFPLEdBQUUsQ0FBQyxDQUFDO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRTdCLGtCQUFrQjtJQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQVhZLFFBQUEsaUJBQWlCLHFCQVc3QjtBQUVELHlCQUF5QiJ9