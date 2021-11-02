import {Repository, EntityRepository} from "typeorm"
import { Connections } from "../entities/connection"

@EntityRepository(Connections)
class ConnectionRepository extends Repository<Connections>{

}

export {ConnectionRepository}