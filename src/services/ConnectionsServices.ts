import {getCustomRepository, Repository}  from "typeorm";
import {Connections} from "../entities/connection"
import {ConnectionRepository} from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsServices {

  private connectionRepository: Repository<Connections>

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

  async findAllWithoutAdmin ()  {
    const connections = await this.connectionRepository.find({
      where: {admin_id: null}, 
      relations: ["users"]
    })

    return connections;
  }

  async findBySocketId (socket_id: string) {
    const connection = await this.connectionRepository.findOne({
      socket_id
    })

    return connection;
  }
}

export {ConnectionsServices}