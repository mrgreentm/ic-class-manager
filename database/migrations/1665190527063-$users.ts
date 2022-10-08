import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class $Users1665190527063 implements MigrationInterface {
  name = '$users1665190527063';
  private users: Table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'VARCHAR',
        length: '255',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'VARCHAR',
        length: '255',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'VARCHAR',
        length: '255',
        isNullable: false,
      },
      {
        name: 'registration',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'role',
        type: 'VARCHAR',
        length: '255',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'updated_at',
        type: 'TIMESTAMP',
        default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()',
      },
      {
        name: 'deleted_at',
        type: 'TIMESTAMP',
        isNullable: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.users);
  }
}
