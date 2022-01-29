import * as configRepository from "./config.repository";
import { IConfig, ICONFIG } from "./config.model";

export async function seedConfigurations() {
    try {
        const CONFIG: Array<ICONFIG> = [
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

        await addConfig(CONFIG);
    } catch (e) {
        return {
            developerMessage: e.message
        };
    }
}

export async function addConfig(body: Array<ICONFIG>) {
    try {
        body.forEach(async config => {
            const count = await configRepository.checkConfig({ module: config.module, name: config.name, country: config.country });

            if (count === 0) {
                configRepository.addConfig(config);
            }
        });

        return true;
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function getConfigs(country: string) {
    return configRepository.getConfigs(country);
}

export async function getConfigsByName(name: string) {
    return configRepository.getConfigsByName(name);
}

export async function getConfigValue(name: string, country = 'TZ') {
    try {
        const config = await configRepository.getConfigValue(name, country);

        if (config && config.value !== undefined) {
            return config.value;
        } else {
            throw new Error("Configuration is not found");
        }
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function setConfig(body: Array<IConfig>) {
    try {
        const configs: any = [];

        for (const config of body) {
            const newConfig = await configRepository.setConfig(config);

            configs.push(newConfig);
        }

        return configs;
    } catch (e) {
        throw new Error(e.message);
    }
}
