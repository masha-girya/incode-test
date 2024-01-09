import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  Column,
} from 'typeorm';
import { CardEntity } from '../card';

@Entity('board')
export class BoardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdDate: Date;

  @Column('character varying')
  name: string;

  @OneToMany(() => CardEntity, (card) => card.board, { onDelete: 'NO ACTION' })
  cards: CardEntity[];
}
