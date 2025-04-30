import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Fighter } from "./Fighter";
import { Event } from "./Event";

@ObjectType()
@Entity()
export class Fight {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Fighter, fighter => fighter.fightsAsA)
  fighterA: Fighter;

  @ManyToOne(() => Fighter, fighter => fighter.fightsAsB)
  fighterB: Fighter;

  @Field()
  @Column()
  result: string;

  @Field()
  @Column()
  method: string;

  @ManyToOne(() => Event, event => event.fights)
  event: Event;
}
