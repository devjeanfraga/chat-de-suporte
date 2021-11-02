import {Entity, PrimaryColumn, CreateDateColumn, ManyToOne, Column, JoinColumn} from "typeorm";
import {v4  as uuid} from "uuid";
import {Users} from "./User";
 

@Entity("messages")
class Messages {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => Users)
  users:Users;

  @Column()
  user_id: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export {Messages}