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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedInitialData = void 0;
const config_service_1 = require("../modules/configurations/config.service");
const seeder_1 = require("../modules/accessControl/seeder/");
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, config_service_1.seedConfigurations)();
        yield (0, seeder_1.seedUser)();
    }
    catch (e) {
        return {
            developerMessage: e.message
        };
    }
});
exports.seedInitialData = seedInitialData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9zZWVkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQThFO0FBQzlFLDZEQUE0RDtBQUVyRCxNQUFNLGVBQWUsR0FBRyxHQUFTLEVBQUU7SUFDdEMsSUFBSTtRQUNBLElBQUEsbUNBQWtCLEdBQUUsQ0FBQztRQUNyQixNQUFNLElBQUEsaUJBQVEsR0FBRSxDQUFDO0tBQ3BCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPO1lBQ0gsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU87U0FDOUIsQ0FBQztLQUNMO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFUWSxRQUFBLGVBQWUsbUJBUzNCIn0=