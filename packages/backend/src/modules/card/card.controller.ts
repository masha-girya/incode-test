import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ROUTES } from 'src/constants';
import { CardService } from './card.service';
import { CardDto } from './card.dto';

@Controller(ROUTES.CARD)
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(ROUTES.ID)
  getCardById(@Param('id') id: string) {
    return this.cardService.getCard(id);
  }

  @Post()
  addCard(@Body() updatedCardDto: CardDto) {
    return this.cardService.addCard(updatedCardDto);
  }

  @Patch(ROUTES.ID)
  updateCard(@Body() updatedCardDto: CardDto) {
    return this.cardService.updateCard(updatedCardDto);
  }

  @Delete(ROUTES.ID)
  removeCard(@Param('id') id: string) {
    return this.cardService.removeCard(id);
  }
}
