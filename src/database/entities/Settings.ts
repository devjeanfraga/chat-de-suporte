import {Entity, Column, CreateDateColumn, UpdateDateColumn,  PrimaryColumn} from 'typeorm'

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id: String

  @Column()
  username: String

  @Column()
  chat: boolean

  @UpdateDateColumn()
  updatedAt: Date

  @CreateDateColumn()
  createdAt: Date
}

export {Setting}