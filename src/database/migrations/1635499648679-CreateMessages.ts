import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1635499648679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
          name: "messages",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "admin_id",
              type: "uuid",
              isNullable: true
            },
            {
              name: "user_id",
              type: "uuid"
            }, 
            {
              name: "text",
              type: "varchar"
            },
            {
              name: "createdAt",
              type: "timestamp",
              default: "now()"
            }
          ],
          foreignKeys: [
            {
              //user_id refere-se ao id da Table user
              name: "FKUser",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["user_id"],
              onDelete: "SET NULL" ,
              onUpdate: "SET NULL"
            }
          ]
        })
      )
    }
       
    

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("messages")
    }

}
