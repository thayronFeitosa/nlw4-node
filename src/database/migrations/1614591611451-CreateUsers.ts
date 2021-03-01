import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1614591611451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',    
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "email",
              type: "varchar"
            },
            {
              name: "create_at",
              type: "datetime",
              default: "now()"
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
