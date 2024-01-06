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
import { BoardService } from './board.service';
import { BoardDto } from './board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get(ROUTES.ID)
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoard(id);
  }

  @Get()
  getBoardById2() {
    return 'BOARD';
  }

  @Post()
  addBoard() {
    return this.boardService.addBoard();
  }

  @Patch(ROUTES.ID)
  updateBoard(@Body() updatedBoardDto: BoardDto) {
    return this.boardService.updateBoard(updatedBoardDto);
  }

  @Delete(ROUTES.ID)
  removeDish(@Param('id') id: string) {
    return this.boardService.removeBoard(id);
  }
}
