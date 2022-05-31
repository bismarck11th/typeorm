import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Person extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_lame: string;

  @Column()
  middle_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, length: 10 })
  card_number: string;

  @Column({ type: 'numeric' })
  balance: number;
}
