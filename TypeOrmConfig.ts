import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "SA",
    password: "JdmhwHZM3_Kcb;>6",
    database: "BookCaseDb",
    synchronize: false,
    migrationsRun: true,    
    migrationsTableName: "MigrationHistory",
    extra: {
        trustServerCertificate: true,
    },
    entities: ["src/domain/entities/**/*.entity{.ts,.js}"],
    migrations: ["src/infra/migrations/**"],    
    cli: {
        entitiesDir: "src/domain/entities",
        migrationsDir: "src/infra/migrations"
    }
}

export = config;