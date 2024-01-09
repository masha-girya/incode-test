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

  @Get(ROUTES.BOARD_ALL)
  getAllBoardsIds() {
    return this.boardService.getAllBoardIds();
  }

  @Get(ROUTES.ID)
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoard(id);
  }

  @Post()
  addBoard(@Body() data: Pick<BoardDto, 'name'>) {
    return this.boardService.addBoard(data.name);
  }

  @Patch(ROUTES.ID)
  updateBoard(@Body() updatedBoardDto: BoardDto) {
    return this.boardService.updateBoard(updatedBoardDto);
  }

  @Delete(ROUTES.ID)
  removeBoard(@Param('id') id: string) {
    return this.boardService.removeBoard(id);
  }
}
