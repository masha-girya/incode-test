import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardDto, BoardEntity } from '../board';
import { CardStatus } from 'src/types';
import { getCardsSorted } from './board.helper';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<BoardEntity>,
  ) {}

  async getBoard(id: string) {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: { cards: true },
    });

    if (!board) {
      throw new NotFoundException();
    }

    const cardsTodo = getCardsSorted(board.cards, CardStatus.TODO);
    const cardsInProgress = getCardsSorted(board.cards, CardStatus.IN_PROGRESS);
    const cardsDone = getCardsSorted(board.cards, CardStatus.DONE);

    return {
      ...board,
      cards: [...cardsTodo, ...cardsInProgress, ...cardsDone],
    };
  }

  async getAllBoardIds() {
    const boardIds = await this.boardRepository.find({
      select: { id: true },
      order: { createdDate: 'DESC' },
    });

    if (!boardIds) {
      throw new NotFoundException();
    }

    return boardIds;
  }

  async addBoard(name: string) {
    const createdBoard = new BoardEntity();
    createdBoard.name = name;

    await this.boardRepository.save(createdBoard);

    return createdBoard;
  }

  async updateBoard(updatedBoardDto: BoardDto) {
    const { id } = updatedBoardDto;
    const board = await this.getBoard(id);

    Object.assign(board, updatedBoardDto);

    await this.boardRepository.save(board);

    return board;
  }

  async removeBoard(id: string) {
    const board = await this.getBoard(id);

    if (board) {
      await this.boardRepository.delete(id);

      return true;
    }

    return false;
  }
}
