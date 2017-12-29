import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 200, nullable: true})
  name: string;

  @Column({ length: 200, unique: true})
  email: string;

  @Column({ length: 20 })
  password: string;
}