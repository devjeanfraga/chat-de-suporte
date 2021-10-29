import { Repository, EntityRepository} from "typeorm";
import {Settings}  from  '../entities/Setting'

@EntityRepository(Settings)
class SettingsRepository extends Repository <Settings> {

}

export {SettingsRepository}