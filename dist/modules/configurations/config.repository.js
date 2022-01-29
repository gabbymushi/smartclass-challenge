"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigsByName = exports.checkConfig = exports.getConfigValue = exports.getConfigs = exports.setConfig = exports.addConfig = void 0;
const config_model_1 = require("./config.model");
const addConfig = (body) => {
    return config_model_1.Config.create(body);
};
exports.addConfig = addConfig;
const setConfig = (body) => {
    const { name, country, value } = body;
    return config_model_1.Config.findOneAndUpdate({ name, country }, { value }, { new: true });
};
exports.setConfig = setConfig;
const getConfigs = (country) => {
    return config_model_1.Config.find({ country });
};
exports.getConfigs = getConfigs;
const getConfigValue = (name, country) => {
    return config_model_1.Config.findOne({ name, country });
};
exports.getConfigValue = getConfigValue;
const checkConfig = (config) => {
    return config_model_1.Config.countDocuments(Object.assign({}, config));
};
exports.checkConfig = checkConfig;
const getConfigsByName = (name) => {
    return config_model_1.Config.find({ name });
};
exports.getConfigsByName = getConfigsByName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jb25maWd1cmF0aW9ucy9jb25maWcucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBMEQ7QUFFbkQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFhLEVBQUUsRUFBRTtJQUN2QyxPQUFPLHFCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQTtBQUZZLFFBQUEsU0FBUyxhQUVyQjtBQUVNLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBYSxFQUFFLEVBQUU7SUFDdkMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRXRDLE9BQU8scUJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDaEYsQ0FBQyxDQUFBO0FBSlksUUFBQSxTQUFTLGFBSXJCO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUMxQyxPQUFPLHFCQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUE7QUFGWSxRQUFBLFVBQVUsY0FFdEI7QUFFTSxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUM1RCxPQUFPLHFCQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBO0FBRlksUUFBQSxjQUFjLGtCQUUxQjtBQUVNLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDMUMsT0FBTyxxQkFBTSxDQUFDLGNBQWMsbUJBQU0sTUFBTSxFQUFHLENBQUM7QUFDaEQsQ0FBQyxDQUFBO0FBRlksUUFBQSxXQUFXLGVBRXZCO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQzdDLE9BQU8scUJBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQTtBQUZZLFFBQUEsZ0JBQWdCLG9CQUU1QiJ9