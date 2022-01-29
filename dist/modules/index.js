"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRoutes = void 0;
const user_routes_1 = require("./users/user.routes");
const auth_routes_1 = require("./auth/auth.routes");
const config_routes_1 = require("./configurations/config.routes");
const transaction_routes_1 = require("./transactions/transaction.routes");
const initializeRoutes = (app) => {
    app.use('/api/v1/users/', user_routes_1.UserRoutes);
    app.use('/api/v1/auth/', auth_routes_1.AuthRoutes);
    app.use('/api/v1/configs/', config_routes_1.ConfigRoutes);
    app.use('/api/v1/deals/', transaction_routes_1.TransactionRoutes);
};
exports.initializeRoutes = initializeRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBaUQ7QUFDakQsb0RBQWdEO0FBQ2hELGtFQUE4RDtBQUU5RCwwRUFBc0U7QUFFL0QsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQXdCLEVBQUUsRUFBRTtJQUN6RCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHdCQUFVLENBQUMsQ0FBQztJQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx3QkFBVSxDQUFDLENBQUM7SUFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBWSxDQUFDLENBQUM7SUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxzQ0FBaUIsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQTtBQUxZLFFBQUEsZ0JBQWdCLG9CQUs1QiJ9