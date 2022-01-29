import { IConfig, ICONFIG, Config } from "./config.model";

export const addConfig = (body: ICONFIG) => {
    return Config.create(body);
}

export const setConfig = (body: IConfig) => {
    const { name, country, value } = body;

    return Config.findOneAndUpdate({ name, country }, { value }, { new: true });
}

export const getConfigs = (country: string) => {
    return Config.find({ country });
}

export const getConfigValue = (name: string, country: string) => {
    return Config.findOne({ name, country });
}

export const checkConfig = (config: object) => {
    return Config.countDocuments({ ...config });
}

export const getConfigsByName = (name: string) => {
    return Config.find({ name });
}