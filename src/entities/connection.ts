import {Entity, PrimaryColumn, CreateDateColumn, ManyToOne, Column, JoinColumn, UpdateDateColumn} from "typeorm";
import {v4  as uuid} from "uuid";
import {Users} from "./User";
 

@Entity("connections")
class Connection {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  socket_id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => Users)
  users:Users;

  @Column()
  user_id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export {Connection}