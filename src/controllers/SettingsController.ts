import {Resquest, Response, } from "express";
import SettingsServices from '../services/SettingsServices'


class SettingsController {
  async create(req: Resquest, res: Response ) {
    try{
      const {chat, username} = req.body

      const settingsServices = new SettingsServices()
      const settings = await settingsServices.create({chat, username})
    
      return res.status(200).json(settings)
    } catch (err) {
     return res.status(400).json({message: err})
    }
  }
}

export {SettingsController}