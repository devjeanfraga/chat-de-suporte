import {Request, Response} from "express"
import {MessageServices} from "../services/MessageServices"

class MessageController {

  async create (req: Request, res: Response) {
    const {admin_id, text, user_id} = req.body
    const messageServices = new MessageServices();

    const message =  await messageServices.create({
      admin_id,
      text,
      user_id
    })

    return res.json(message)
  }
}

export { MessageController}