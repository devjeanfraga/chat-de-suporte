import {Repository, EntityRepository} from 'typeorm';
import {User} from "../entities/User";

class UsersRepository extends Repository<User> {

}

export {UsersRepository};