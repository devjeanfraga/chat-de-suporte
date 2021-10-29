import {Repository, EntityRepository} from 'typeorm';
import {Users} from "../entities/User";

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {

}

export {UsersRepository};