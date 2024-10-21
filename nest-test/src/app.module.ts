import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';
import { LocationModule } from './location/location.module';
import { configService } from './config/config.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 6000,
    //   username: 'postgres_user',
    //   password: 'postgres_password',
    //   database: 'postgres_db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    EventModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
