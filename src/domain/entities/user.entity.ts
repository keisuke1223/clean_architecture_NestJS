import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number

  @Column({ length: '30' })
  @Field()
  name: string

  @UpdateDateColumn()
  @Field()
  updatedAt: Date

  @CreateDateColumn()
  @Field()
  createdAt: Date
}
