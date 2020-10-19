import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602629557529 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns:[
        {
        name: 'id',
        type: 'integer', //inteiro
        unsigned: true, //not null
        isPrimary: true, //chave primaria
        isGenerated: true, //criada de forma automatica
        generationStrategy: 'increment', // auto incremental
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,    //numeros depois da virgula
          precision: 2, //numeros antes da virgula
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
            name: 'opening_hours',
            type: 'varchar',
          },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}