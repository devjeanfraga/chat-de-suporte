import {getCustomRepository, Repository}  from "typeorm";
import {Connection} from "../entities/connection"
import {ConnectionRepository} from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsServices {

  private connectionRepository: Repository<Connection>

  constructor () {
    this.connectionRepository = getCustomRepository(ConnectionRepository);
  }

  async create ({socket_id, user_id, admin_id, id}: IConnectionCreate) {
    const connection = this.connectionRepository.create({
      socket_id,
      user_id,
      admin_id,
      id
    })

    await this.connectionRepository.save(connection);
  }
  
  async findByUserId (user_id: string) {
    const connection = await this.connectionRepository.findOne({
      user_id
    });

    return connection;
  }
}

export {ConnectionsServices}