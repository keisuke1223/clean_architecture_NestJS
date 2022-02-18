import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from './infrastructure/config/configuration'

import { GraphqlModule } from './infrastructure/modules/graphql.module'
import { RestModule } from './infrastructure/modules/rest.module'

import { AppController } from './adaptor/controllers/app.controller'
import { AppService } from './application/services/app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
    }),
    GraphqlModule,
    RestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
