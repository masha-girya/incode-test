import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { CardEntity } from '../card';

@Entity('board')
export class BoardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdDate: Date;

  // @Column('uuid')
  // cardsIds: string[];

  @OneToMany(() => CardEntity, (card) => card.board, { onDelete: 'NO ACTION' })
  // @Exclude()
  cards: CardEntity[];
}
