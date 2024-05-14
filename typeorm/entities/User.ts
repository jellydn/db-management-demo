import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";

@Index("user_email_key", ["email"], { unique: true })
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
