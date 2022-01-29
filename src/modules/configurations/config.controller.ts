import { Request, Response } from 'express';
import * as configService from "./config.service";

export async function addConfig(req: any, res: Response) {
  try {
    const { body } = req;

    const config = await configService.addConfig(body);

    return res.status(200).json(config);
  } catch (e) {
    return res.status(400).json({
      userMessage: "Ooops... Something went wrong...",
      developerMessage: e.message
    });
  }
}

export async function getConfigs(req: Request, res: Response) {
  try {
    const country = req.query.country as unknown as string;

    const configs = await configService.getConfigs(country);

    return res.status(200).json(configs);
  } catch (e) {
    return res.status(400).json({
      userMessage: "Ooops... Something went wrong...",
      developerMessage: e.message
    });
  }
}

export async function setConfig(req: Request, res: Response) {
  try {
    const { configs } = req.body;

    const newConfigs = await configService.setConfig(configs);

    return res.status(200).json({ userMessage: 'Configs set successfully', data: newConfigs });
  } catch (e) {
    return res.status(400).json({
      userMessage: "Ooops... Something went wrong...",
      developerMessage: e.message
    });
  }
}

export async function getConfigValue(req: Request, res: Response) {
  try {
    const configName = req.query.name as unknown as string;

    const config = await configService.getConfigValue(configName);

    return res.status(200).json({ value: config });
  } catch (e) {
    return res.status(400).json({
      userMessage: "Ooops... Something went wrong...",
      developerMessage: e.message
    });
  }
}

