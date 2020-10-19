
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602664379758 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "images",
            columns: [
                {
                    name: 'id',
                    type: 'integer', //inteiro
                    unsigned: true, //not null
                    isPrimary: true, //chave primaria
                    isGenerated: true, //criada de forma automatica
                    generationStrategy: 'increment', // auto incremental    
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'interger',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOprphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //caso o id seja atualizado altera o id de forma automatica
                    onDelete: 'CASCADE', //caso a tabela seja deletada ele deleta as imags
                
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }
}
