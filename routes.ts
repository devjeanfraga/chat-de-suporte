import {Router} from 'express';
import {SettingsController} from './src/controllers/SettingsController';
import {UsersController} from './src/controllers/UsersControllers'
import { MessageController } from './src/controllers/MessageController';

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessageController();
const routes = Router()


routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);
routes.post ('/messages', messageController.create);
routes.get('/messages/:id', messageController.showByUser)

export {routes}; 