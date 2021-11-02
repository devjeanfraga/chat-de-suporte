import {Repository, EntityRepository}  from "typeorm"
import {Messages}  from "../entities/Message";

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages>{

}

export {MessagesRepository}