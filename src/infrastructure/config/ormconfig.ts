// migration用設定ファイル
import { ConnectionOptions } from "typeorm";

const ormconfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/domain/entities/*.entity{.ts,.js}'],
    migrations: ["dist/infrastructure/database/migrations/*{.ts,.js}"],　//実行マイグレの参照先
    synchronize: false,
    cli: {
        entitiesDir: "src/domain/entities",
        migrationsDir: "src/infrastructure/database/migrations",  //出力先
    }
};

export default ormconfig;