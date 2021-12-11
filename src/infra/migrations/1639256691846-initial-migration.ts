import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1639256691846 implements MigrationInterface {
    name = 'initialMigration1639256691846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "status" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_b3104aac21a05e03998782a75cc" DEFAULT NEWSEQUENTIALID(), "Name" varchar(50) NOT NULL, CONSTRAINT "PK_b3104aac21a05e03998782a75cc" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "book" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_2f5c3a233c33616f031206e11bd" DEFAULT NEWSEQUENTIALID(), "Name" varchar(300) NOT NULL, "ReleaseDate" date NOT NULL, "ISBN" varchar(30) NOT NULL, "StatusId" uniqueidentifier, CONSTRAINT "PK_2f5c3a233c33616f031206e11bd" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "author" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_4880e15dfecd31265d230d460a2" DEFAULT NEWSEQUENTIALID(), "FirstName" varchar(100) NOT NULL, "LastName" varchar(100) NOT NULL, "MiniBio" varchar(1000) NOT NULL, CONSTRAINT "PK_4880e15dfecd31265d230d460a2" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "author_books_book" ("authorId" uniqueidentifier NOT NULL, "bookId" uniqueidentifier NOT NULL, CONSTRAINT "PK_6b6bf224c7ce78773e95bded3f2" PRIMARY KEY ("authorId", "bookId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e9ac29df6d093aa0b8079f1d15" ON "author_books_book" ("authorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_34342925729041ac5301b289a9" ON "author_books_book" ("bookId") `);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_86a5f592914d5d64b8ae23b2a9e" FOREIGN KEY ("StatusId") REFERENCES "status"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "author_books_book" ADD CONSTRAINT "FK_e9ac29df6d093aa0b8079f1d151" FOREIGN KEY ("authorId") REFERENCES "author"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "author_books_book" ADD CONSTRAINT "FK_34342925729041ac5301b289a9a" FOREIGN KEY ("bookId") REFERENCES "book"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author_books_book" DROP CONSTRAINT "FK_34342925729041ac5301b289a9a"`);
        await queryRunner.query(`ALTER TABLE "author_books_book" DROP CONSTRAINT "FK_e9ac29df6d093aa0b8079f1d151"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_86a5f592914d5d64b8ae23b2a9e"`);
        await queryRunner.query(`DROP INDEX "IDX_34342925729041ac5301b289a9" ON "author_books_book"`);
        await queryRunner.query(`DROP INDEX "IDX_e9ac29df6d093aa0b8079f1d15" ON "author_books_book"`);
        await queryRunner.query(`DROP TABLE "author_books_book"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "status"`);
    }

}
