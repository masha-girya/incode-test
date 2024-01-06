import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardDto, BoardEntity } from '../board';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<BoardEntity>,
  ) {}

  async getBoard(id: string) {
    const board = await this.boardRepository.findOne({
      where: { id },
    });

    if (!board) {
      throw new NotFoundException();
    }

    return board;
  }

  async getBoardWithRelations(id: string) {
    const board = await this.boardRepository.findOne({
      where: { id },
    });

    if (!board) {
      throw new NotFoundException();
    }

    return board;
  }

  async addBoard() {
    const createdBoard = new BoardEntity();

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
