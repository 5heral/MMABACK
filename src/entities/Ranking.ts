import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Ranking {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fighterId: number;

  @Field()
  @Column()
  weightClass: string;

  @Field(() => Int)
  @Column()
  rank: number;
}
