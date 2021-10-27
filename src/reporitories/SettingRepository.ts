import { Repository } from "typeorm";
import {Settings}  from  '../entities/Settings'

class SettingsRepository extends Repository <Settings> {

}

export {SettingsRepository}