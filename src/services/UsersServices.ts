import {UsersRepository} from "../repositories/UserRepository";
import {Users} from "../entities/User";
import {getCustomRepository, Repository} from "typeorm";

class UsersServices {

  private userRepository: Repository<Users>

  constructor () {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async create (email:string) {
   
    //verificar se o usuário existe, se não existir salvar no DB

    const userExists = await this.userRepository.findOne({email})

    if(userExists) {
      return userExists;
    }

    const user =  this.userRepository.create({
      email
    });

    await this.userRepository.save(user);

    return user;

  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ email })
  }
  
}

export {UsersServices}