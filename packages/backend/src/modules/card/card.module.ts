import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { BoardModule } from '../board';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity]),
    forwardRef(() => BoardModule),
  ],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}
