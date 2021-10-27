import {Router} from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from './src/reporitories/SettingsRepository';
const routes = Router()


routes.post('/settings', async (req, res)=> {
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
})

export {routes}; 