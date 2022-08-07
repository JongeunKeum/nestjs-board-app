import { Controller, Get } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
	constructor(private boardService: BoardsService) {}

	@Get('/')
	getAllBoards(): Board[] {
		return this.boardService.getAllBoards();
	}
}
