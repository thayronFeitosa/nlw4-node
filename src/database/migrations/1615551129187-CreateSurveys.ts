import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSurveys1615551129187 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Surveys',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true, // tru is increment id
            generationStrategy: "increment", // auto increment
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()',
          }
        ]
      })
    )

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Surveys')
  }

}
