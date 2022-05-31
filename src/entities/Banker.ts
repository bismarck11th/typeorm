import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { Person } from './utils/Person';

@Entity('banker')
export class Banker extends Person {
  @Column({ unique: true, length: 10 })
  employee_number: string;

  @Column({ default: true, name: 'active' })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
