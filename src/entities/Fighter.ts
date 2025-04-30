import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Fight } from "./Fight";

@ObjectType()
@Entity()
export class Fighter {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fullName: string;

  @Field()
  @Column()
  nationality: string;

  @Field()
  @Column()
  team: string;

  @Field()
  @Column()
  weightClass: string;

  @Field(() => Int)
  @Column()
  wins: number;

  @Field(() => Int)
  @Column()
  losses: number;

  @Field(() => Int)
  @Column()
  knockouts: number;

  @Field(() => Int)
  @Column()
  submissions: number;

  @OneToMany(() => Fight, fight => fight.fighterA)
  fightsAsA: Fight[];

  @OneToMany(() => Fight, fight => fight.fighterB)
  fightsAsB: Fight[];
}
