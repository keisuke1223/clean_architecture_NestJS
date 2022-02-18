import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from 'infrastructure/config/configuration'

import { AppResolverModule } from 'infrastructure/modules/app.resolver.module'
import { AppControllerModule } from 'infrastructure/modules/app.controller.module'

import { AppController } from 'adaptor/controllers/app.controller'
import { AppService } from 'application/services/app.service'

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
    AppResolverModule,
    AppControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
