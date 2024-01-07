import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CardDto, CardEntity } from '../card';
import { BoardService } from '../board';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
    @Inject(forwardRef(() => BoardService))
    private boardService: BoardService,
  ) {}

  async getCard(id: string) {
    const card = await this.cardRepository.findOne({
      where: { id },
    });

    if (!card) {
      throw new NotFoundException();
    }

    return card;
  }

  async getCards(ids: string[]) {
    const cards = await this.cardRepository.find({
      where: { id: In(ids) },
    });

    if (!cards) {
      throw new NotFoundException();
    }

    return cards;
  }

  async addCard(createdCardDto: CardDto) {
    const { boardId } = createdCardDto;
    const createdCard = new CardEntity();
    const board = await this.boardService.getBoard(boardId);

    if (!board) {
      throw new NotFoundException();
    }

    Object.assign(createdCard, createdCardDto, { board });

    if (board.cards) {
      board.cards.push(createdCard);
    } else {
      board.cards = [createdCard];
    }

    await this.cardRepository.save(createdCard);

    const data = {
      id: createdCard.id,
      boardId: createdCard.boardId,
      status: createdCard.status,
      title: createdCard.title,
      description: createdCard.description,
    };

    return data;
  }

  async updateCard(updatedCardDto: CardDto) {
    const { id } = updatedCardDto;
    const card = await this.getCard(id);

    if (!card) {
      throw new NotFoundException();
    }

    await this.cardRepository.save(updatedCardDto);

    return card;
  }

  async removeCard(id: string) {
    const card = await this.getCard(id);

    if (card) {
      await this.cardRepository.delete(id);

      return true;
    }

    return false;
  }
}
