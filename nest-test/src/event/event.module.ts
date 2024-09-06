import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { EventController } from './event.controller';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'postgres',
  //     password: '',
  //     database: 'mydb',
  //     entities: [],
  //     synchronize: true,
  //   }),
  // ],
  controllers: [EventController],
  providers: [],
})
export class EventModule {}
