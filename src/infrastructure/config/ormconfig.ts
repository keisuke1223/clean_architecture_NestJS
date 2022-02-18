// migration用設定ファイル
import { ConnectionOptions } from 'typeorm'

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/domain/entities/*.entity.ts'], //migrationファイル生成時の差分検出先
  migrations: ['src/infrastructure/database/migrations/*.ts'], //migration実行時の参照ファイル
  synchronize: false,
  cli: {
    entitiesDir: 'src/domain/entities',
    migrationsDir: 'src/infrastructure/database/migrations', //migrationファイル生成時の出力先
  },
}

export default ormconfig
