import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1635495663810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
      new Table({
         name: "Users",
         columns: [
           {
             name: "id",
             type: "uuid",
             isPrimary: true
           },
           {
             name: "email",
             type: "varchar"
           },
           {
             name: "createdAt",
             type: "timestamp", 
             default: "now()"
           },
           {
             name: "updatedAt",
             type: "timestamp",
             default: "now()"
           }
         ]
      }))
    }
      

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("Users");

    }

}
