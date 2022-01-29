"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./config/middlewares");
const constants_1 = require("./config/constants");
const database_1 = require("./config/database");
const modules_1 = require("./modules");
const app = (0, express_1.default)();
(0, middlewares_1.middlewaresConfig)(app);
(0, database_1.connectDB)();
(0, modules_1.initializeRoutes)(app);
app.listen(constants_1.constants.PORT, () => {
    console.log(`Application is running on port ${constants_1.constants.PORT}`);
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixzREFBeUQ7QUFDekQsa0RBQStDO0FBQy9DLGdEQUE4QztBQUM5Qyx1Q0FBNkM7QUFHN0MsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsSUFBQSwrQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFBLG9CQUFTLEdBQUUsQ0FBQztBQUNaLElBQUEsMEJBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFFdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MscUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ25FLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsR0FBRyxDQUFBIn0=