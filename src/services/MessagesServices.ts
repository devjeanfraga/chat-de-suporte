import {getCustomRepository, Repository} from "typeorm"
import {Messages} from '../entities/Message'
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
  admin_id?: string,
  text: string,
  user_id: string
}
 

class MessagesServices {

  private messagesRepository: Repository<Messages>;

  constructor () {
    this.messagesRepository = getCustomRepository(MessagesRepository)
  }

  async create ({admin_id, text, user_id}: IMessageCreate) {
    

    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id
    });

    await this.messagesRepository.save(message);

    return message;
  }

  async listByUser (user_id: string) {
     

     const list = await this.messagesRepository.find({
       where:{ user_id},
       relations: ["users"]
      })

      return list;
  }

}

export {MessagesServices}