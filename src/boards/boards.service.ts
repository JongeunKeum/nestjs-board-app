import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {

	// Inject Repository to Service
	constructor(
		@InjectRepository(BoardRepository)
		private boardRepository: BoardRepository,
	) {}

	// getAllBoards(): Board[] {
	// 	return this.boards;
	// }

	createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
		return this.boardRepository.createBoard(createBoardDto);
	}

	// createBoard(createBoardDto: CreateBoardDto): Board {
	// 	const { title, description } = createBoardDto;

	// 	const board: Board = {
	// 		id: uuid(),
	// 		title,
	// 		description,
	// 		status: BoardStatus.PUBLIC
	// 	}

	// 	this.boards.push(board);
	// 	return board;
	// }

	async getBoardById(id: number): Promise<Board> {
		const found = await this.boardRepository.findOne(id);

		if (!found) {
			throw new NotFoundException(`Cannot find Board with id ${id}`);
		}

		return found;
	}

	// getBoardById(id: string): Board {
	// 	const found = this.boards.find((board) => board.id === id);

	// 	if (!found) {
	// 		throw new NotFoundException(`Cannot find Board with id ${id}`);
	// 	}
	// 	return found;
	// }

	// deleteBoard(id: string): void {
	// 	const found = this.getBoardById(id);
	// 	this.boards = this.boards.filter((board) => board.id !== found.id);
	// }

	// updateBoardStatus(id: string, status: BoardStatus): Board {
	// 	const board = this.getBoardById(id);
	// 	board.status = status;
	// 	return board;
	// }

}
