"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCollection = exports.dropTestDB = exports.initializeTestDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./constants");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'test') {
        return (0, exports.initializeTestDB)();
    }
    const { DATABASE_URL } = constants_1.constants;
    try {
        yield mongoose_1.default.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log(`Database connected successfully`);
    }
    catch (e) {
        console.log(`Database connection failed ${e.message}`);
    }
});
exports.connectDB = connectDB;
const initializeTestDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(constants_1.constants.TEST_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        // console.log(`Database connected successfully`)
    }
    catch (e) {
        console.log(`Database connection failed ${e.message}`);
    }
});
exports.initializeTestDB = initializeTestDB;
const dropTestDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return mongoose_1.default.connection.db.dropDatabase(function (err, result) {
        //console.log(`${constants.TEST_DB_URL} Database dropped successfully`);
    });
});
exports.dropTestDB = dropTestDB;
const clearCollection = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.db.dropCollection(collection, function (err, result) {
    });
});
exports.clearCollection = clearCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFnQztBQUNoQywyQ0FBd0M7QUFFakMsTUFBTSxTQUFTLEdBQUcsR0FBUyxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUNqQyxPQUFPLElBQUEsd0JBQWdCLEdBQUUsQ0FBQTtLQUM1QjtJQUVELE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxxQkFBUyxDQUFDO0lBQ25DLElBQUk7UUFDQSxNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNqQyxlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsY0FBYyxFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0tBQ2pEO0lBQUMsT0FBTyxDQUFDLEVBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtLQUN6RDtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBbEJZLFFBQUEsU0FBUyxhQWtCckI7QUFFTSxNQUFNLGdCQUFnQixHQUFHLEdBQVMsRUFBRTtJQUN2QyxJQUFJO1FBQ0EsTUFBTSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsY0FBYyxFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFBO1FBQ0YsaURBQWlEO0tBQ3BEO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtLQUN6RDtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBWlksUUFBQSxnQkFBZ0Isb0JBWTVCO0FBRU0sTUFBTSxVQUFVLEdBQUcsR0FBUyxFQUFFO0lBQ2pDLE9BQU8sa0JBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsRUFBRSxNQUFNO1FBQzVELHdFQUF3RTtJQUM1RSxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFBO0FBSlksUUFBQSxVQUFVLGNBSXRCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBTyxVQUFrQixFQUFFLEVBQUU7SUFDeEQsTUFBTSxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNO0lBQzdFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUE7QUFIWSxRQUFBLGVBQWUsbUJBRzNCIn0=