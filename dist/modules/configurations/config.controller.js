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
exports.getConfigValue = exports.setConfig = exports.getConfigs = exports.addConfig = void 0;
const configService = __importStar(require("./config.service"));
function addConfig(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const config = yield configService.addConfig(body);
            return res.status(200).json(config);
        }
        catch (e) {
            return res.status(400).json({
                userMessage: "Ooops... Something went wrong...",
                developerMessage: e.message
            });
        }
    });
}
exports.addConfig = addConfig;
function getConfigs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const country = req.query.country;
            const configs = yield configService.getConfigs(country);
            return res.status(200).json(configs);
        }
        catch (e) {
            return res.status(400).json({
                userMessage: "Ooops... Something went wrong...",
                developerMessage: e.message
            });
        }
    });
}
exports.getConfigs = getConfigs;
function setConfig(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { configs } = req.body;
            const newConfigs = yield configService.setConfig(configs);
            return res.status(200).json({ userMessage: 'Configs set successfully', data: newConfigs });
        }
        catch (e) {
            return res.status(400).json({
                userMessage: "Ooops... Something went wrong...",
                developerMessage: e.message
            });
        }
    });
}
exports.setConfig = setConfig;
function getConfigValue(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const configName = req.query.name;
            const config = yield configService.getConfigValue(configName);
            return res.status(200).json({ value: config });
        }
        catch (e) {
            return res.status(400).json({
                userMessage: "Ooops... Something went wrong...",
                developerMessage: e.message
            });
        }
    });
}
exports.getConfigValue = getConfigValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jb25maWd1cmF0aW9ucy9jb25maWcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQWtEO0FBRWxELFNBQXNCLFNBQVMsQ0FBQyxHQUFRLEVBQUUsR0FBYTs7UUFDckQsSUFBSTtZQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFFckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5ELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQzVCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUFBO0FBYkQsOEJBYUM7QUFFRCxTQUFzQixVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7O1FBQzFELElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQTRCLENBQUM7WUFFdkQsTUFBTSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXhELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQzVCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUFBO0FBYkQsZ0NBYUM7QUFFRCxTQUFzQixTQUFTLENBQUMsR0FBWSxFQUFFLEdBQWE7O1FBQ3pELElBQUk7WUFDRixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUU3QixNQUFNLFVBQVUsR0FBRyxNQUFNLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM1RjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDNUIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQUE7QUFiRCw4QkFhQztBQUVELFNBQXNCLGNBQWMsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7UUFDOUQsSUFBSTtZQUNGLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBeUIsQ0FBQztZQUV2RCxNQUFNLE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFOUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTzthQUM1QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FBQTtBQWJELHdDQWFDIn0=