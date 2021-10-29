import {Router} from 'express';
import {SettingsController} from './src/controllers/SettingsController';
import { UsersControllers } from './src/controllers/UsersControllers';
const settingsController = new SettingsController()
const usersControllers = new UsersControllers() 
const routes = Router()


routes.post('/settings', settingsController.create);
routes.post('/users', usersControllers.create)

export {routes}; 