/* eslint-disable prettier/prettier */
import { hashPasswordTransform } from './../../helper/cripto-transform';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'students' })
export class StudentsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  registration: string;
  @Column()
  classesId: string;
  @Column({ transformer: hashPasswordTransform })
  password: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}

