import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createDepartments1609060176466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: 'departments',
            columns:[
              {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
              },
              {
                  name: 'name',
                  type: 'varchar',
                  length: '100',
                  isNullable: false,
              },
              {
                  name: 'created_at',
                  type: 'timestamptz',
                  isNullable: false,
                  default: 'now()',
              },
              {
                name: 'update_at',
                type: 'timestamp',
                default: 'now()',
              },
            ]
          });

          await queryRunner.createForeignKey(
            'departaments',
            new TableForeignKey({
                name: '',
                columnNames: ['departament_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
              })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('departments');
    }

}
