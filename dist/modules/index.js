"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRoutes = void 0;
const user_routes_1 = require("./users/user.routes");
const auth_routes_1 = require("./auth/auth.routes");
const transaction_routes_1 = require("./transactions/transaction.routes");
const order_routes_1 = require("./orders/order.routes");
const item_routes_1 = require("./items/item.routes");
const initializeRoutes = (app) => {
    app.use('/api/v1/users/', user_routes_1.UserRoutes);
    app.use('/api/v1/auth/', auth_routes_1.AuthRoutes);
    app.use('/api/v1/deals/', transaction_routes_1.TransactionRoutes);
    app.use('/api/v1/items/', item_routes_1.ItemRoutes);
    //app.use('/api/v1/orders/', OrderRoutes);
    app.use('/', item_routes_1.ItemRoutes);
    app.use('/items/', item_routes_1.ItemRoutes);
    app.use('/orders', order_routes_1.OrderRoutes);
};
exports.initializeRoutes = initializeRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBaUQ7QUFDakQsb0RBQWdEO0FBRWhELDBFQUFzRTtBQUN0RSx3REFBb0Q7QUFDcEQscURBQWlEO0FBRTFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUF3QixFQUFFLEVBQUU7SUFDekQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBVSxDQUFDLENBQUM7SUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsd0JBQVUsQ0FBQyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsc0NBQWlCLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHdCQUFVLENBQUMsQ0FBQztJQUN0QywwQ0FBMEM7SUFFMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsd0JBQVUsQ0FBQyxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHdCQUFVLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSwwQkFBVyxDQUFDLENBQUM7QUFFcEMsQ0FBQyxDQUFBO0FBWFksUUFBQSxnQkFBZ0Isb0JBVzVCIn0=