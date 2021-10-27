import {Router} from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from './src/reporitories/SettingRepository';
const routes = Router()


routes.post('/settings', async (req, res)=> {
  const settingsRepository = getCustomRepository(SettingsRepository)
  const settings =settingsRepository.create({
    chat,
    username
  })
  /* Seria como:
    const settings= new Settings()
  */
  await settingsRepository.save(settings)
})