import {Request, Response} from "express"
import {UserServices} from "../services/UsersServices"

class UsersControllers {
  async create (req: Request, res: Response) {
  const {email} = req.body;  
  const userServices = new UserServices();
  
  const user = await userServices.create(email);

   return res.json(user)
  }
}

export {UsersControllers}