"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middlewares_1 = require("./config/middlewares");
const constants_1 = require("./config/constants");
const database_1 = require("./config/database");
const modules_1 = require("./modules");
const app = (0, express_1.default)();
(0, middlewares_1.middlewaresConfig)(app);
(0, database_1.connectDB)();
(0, modules_1.initializeRoutes)(app);
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// define a route handler for the default home page
/* app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} ); */
app.listen(constants_1.constants.PORT, () => {
    console.log(`Application is running on port ${constants_1.constants.PORT}`);
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsc0RBQXlEO0FBQ3pELGtEQUErQztBQUMvQyxnREFBOEM7QUFDOUMsdUNBQTZDO0FBRzdDLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXRCLElBQUEsK0JBQWlCLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBQSxvQkFBUyxHQUFFLENBQUM7QUFDWixJQUFBLDBCQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXRCLCtCQUErQjtBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFFLE9BQU8sRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFFLFNBQVMsRUFBRSxPQUFPLENBQUUsQ0FBRSxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUUsYUFBYSxFQUFFLEtBQUssQ0FBRSxDQUFDO0FBRWhDLG1EQUFtRDtBQUNuRDs7O09BR087QUFFUCxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxxQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUEifQ==