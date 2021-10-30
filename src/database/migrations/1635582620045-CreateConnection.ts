import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnection1635582620045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "connections",
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
              type: "uuid",
            },
            {
              name: "socket_id",
              type: "varcher"
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
        })
      );

        await queryRunner.createForeignKey(
          "connections",
          new TableForeignKey({
            name: "FKConnectionUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate:  "SET NULL"
          })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey("connection", "FKConnectionUser")
      await queryRunner.dropTable("connections")
    }

}
