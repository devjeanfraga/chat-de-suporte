import {Request, Response} from "express"
import {UsersServices} from "../services/UsersServices"

class UsersController {
  async create (req: Request, res: Response) {
  const {email} = req.body;  
  const userServices = new UsersServices();
  
  const user = await userServices.create(email);

   return res.json(user)
  }
}

export {UsersController}