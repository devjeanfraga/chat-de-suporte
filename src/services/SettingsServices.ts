
import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../reporitories/SettingsRepository";


interface SettingsCreate {
  chat: boolean;
  username: string
}

class SettingsServices {

  async create ({chat, username}: SettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository)
    
    const useAlreadyExists = await settingsRepository.findOne({
      username
    });

    if(!username) {
      throw new Error ("User already exists");
    }

    const settings =settingsRepository.create({
      chat,
      username
    })
    /* Seria como:
      const settings= new Settings()
    */
    await settingsRepository.save(settings)

    return settings;
  }
}

export default SettingsServices