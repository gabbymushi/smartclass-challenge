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
exports.setConfig = exports.getConfigValue = exports.getConfigsByName = exports.getConfigs = exports.addConfig = exports.seedConfigurations = void 0;
const configRepository = __importStar(require("./config.repository"));
function seedConfigurations() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const CONFIG = [
                //TANZANIA CONFIGS
                { module: 'loan', country: 'TZ', name: 'loanDefaultPeriod', displayName: 'Loan default period in days', type: 'number' },
                { module: 'loan', country: 'TZ', name: 'loanDefaultPenalty', displayName: 'Loan default penalty in %', type: 'number' },
                { module: 'loan', country: 'TZ', name: 'transferFee', displayName: 'Loaned tokens transfer fee in %', type: 'number' },
                { module: 'loan', country: 'TZ', name: 'unspentTokenCharges', displayName: 'Unspent token charges in %', type: 'number' },
                { module: 'transaction', country: 'TZ', name: 'tokenValue', displayName: 'Token value', type: 'number' },
                { module: 'transaction', country: 'TZ', name: 'purchasedTokenBonus', displayName: 'Purchased Token Bonus in %', type: 'number' },
                { module: 'transaction', country: 'TZ', name: 'withdrawalFee', displayName: 'Withdrawal Fee In %', type: 'number' },
                //NIGERIA CONFIGS
                { module: 'loan', country: 'NG', name: 'loanDefaultPeriod', displayName: 'Loan default period in days', type: 'number' },
                { module: 'loan', country: 'NG', name: 'loanDefaultPenalty', displayName: 'Loan default penalty in %', type: 'number' },
                { module: 'loan', country: 'NG', name: 'transferFee', displayName: 'Loaned tokens transfer fee in %', type: 'number' },
                { module: 'loan', country: 'NG', name: 'unspentTokenCharges', displayName: 'Unspent token charges in %', type: 'number' },
                { module: 'transaction', country: 'NG', name: 'tokenValue', displayName: 'Token value', type: 'number' },
                { module: 'transaction', country: 'NG', name: 'purchasedTokenBonus', displayName: 'Purchased Token Bonus in %', type: 'number' },
                { module: 'transaction', country: 'NG', name: 'withdrawalFee', displayName: 'Withdrawal Fee In %', type: 'number' },
            ];
            yield addConfig(CONFIG);
        }
        catch (e) {
            return {
                developerMessage: e.message
            };
        }
    });
}
exports.seedConfigurations = seedConfigurations;
function addConfig(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            body.forEach((config) => __awaiter(this, void 0, void 0, function* () {
                const count = yield configRepository.checkConfig({ module: config.module, name: config.name, country: config.country });
                if (count === 0) {
                    configRepository.addConfig(config);
                }
            }));
            return true;
        }
        catch (e) {
            throw new Error(e.message);
        }
    });
}
exports.addConfig = addConfig;
function getConfigs(country) {
    return __awaiter(this, void 0, void 0, function* () {
        return configRepository.getConfigs(country);
    });
}
exports.getConfigs = getConfigs;
function getConfigsByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return configRepository.getConfigsByName(name);
    });
}
exports.getConfigsByName = getConfigsByName;
function getConfigValue(name, country = 'TZ') {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const config = yield configRepository.getConfigValue(name, country);
            if (config && config.value !== undefined) {
                return config.value;
            }
            else {
                throw new Error("Configuration is not found");
            }
        }
        catch (e) {
            throw new Error(e.message);
        }
    });
}
exports.getConfigValue = getConfigValue;
function setConfig(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const configs = [];
            for (const config of body) {
                const newConfig = yield configRepository.setConfig(config);
                configs.push(newConfig);
            }
            return configs;
        }
        catch (e) {
            throw new Error(e.message);
        }
    });
}
exports.setConfig = setConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jb25maWd1cmF0aW9ucy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXdEO0FBR3hELFNBQXNCLGtCQUFrQjs7UUFDcEMsSUFBSTtZQUNBLE1BQU0sTUFBTSxHQUFtQjtnQkFDM0Isa0JBQWtCO2dCQUNsQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ3hILEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDdkgsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDdEgsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2dCQUN6SCxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDeEcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixF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