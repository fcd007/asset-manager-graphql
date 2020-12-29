import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRequestAsset1609060268348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: 'requestassets',
            columns:[
              {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
              },
              {
                  name: 'user_id',
                  type: 'uuid',
                  isNullable: false,
              },
              {
                name: 'description',
                type: 'varchar',
                length: '500',
                isNullable: true,
              },
              {
                name: 'price',
                type: 'numeric',
                isNullable: true,
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('requestassets');
    }

}
