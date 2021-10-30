import {Request, Response} from "express"
import {MessagesServices} from "../services/MessagesServices"

class MessageController {

  async create (req: Request, res: Response) {
    const {admin_id, text, user_id} = req.body
    const messageServices = new MessagesServices();

    const message =  await messageServices.create({
      admin_id,
      text,
      user_id
    })

    return res.json(message)
  }

  async showByUser (req: Request, res: Response) {
    const {id} = req.params;

    const messagesServices = new MessagesServices();
    const list = await messagesServices.listByUser(id);

    return  res.status(200).json(list)
  }
}

export { MessageController}