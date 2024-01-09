import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardEntity } from '../board';
import { CardStatus } from 'src/types';
import { Exclude } from 'class-transformer';

@Entity('card')
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdDate: Date;

  @Column('character varying')
  title: string;

  @Column('character varying')
  description: string;

  @Column('int', { default: 0 })
  order: number;

  @Column({
    type: 'enum',
    enum: CardStatus,
    default: CardStatus.TODO,
  })
  status: CardStatus;

  @Column('uuid')
  boardId: string;

  @ManyToOne(() => BoardEntity, (board) => board.cards, {
    onDelete: 'CASCADE',
  })
  @Exclude()
  board: BoardEntity;
}
