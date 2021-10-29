import {UsersRepository} from "../repositories/UserRepository"
import {getCustomRepository} from "typeorm"

class UserServices {
  async create (email:string) {
    const userRepository = getCustomRepository(UsersRepository)
    //verificar se o usuário existe, se não existir salvar no DB

    const userExists = await userRepository.findOne({email})

    if(userExists) {
      return userExists;
    }

    const user =  userRepository.create({
      email
    });

    await userRepository.save(user);

    return user;

  }
}

export {UserServices}