import {Resquest, Response} from "express";
import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../reporitories/SettingsRepository";

class SettingsController {
  async create(req: Resquest, res: Response) {
    const {chat, username} = req.body

    const settingsRepository = getCustomRepository(SettingsRepository)
    const settings =settingsRepository.create({
      chat,
      username
    })
    /* Seria como:
      const settings= new Settings()
    */
    await settingsRepository.save(settings)
  
    return res.status(200).json(settings)
  }
}

export {SettingsController}