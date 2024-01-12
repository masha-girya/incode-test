import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB } from 'src/constants';
import { BoardEntity, BoardModule } from './modules/board';
import { CardEntity, CardModule } from './modules/card';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: DB.HOST,
        username: DB.USERNAME,
        password: DB.PASSWORD,
        database: DB.NAME,
        entities: [BoardEntity, CardEntity],
        synchronize: true,
      }),
    }),
    BoardModule,
    CardModule,
  ],
})
export class AppModule {}
