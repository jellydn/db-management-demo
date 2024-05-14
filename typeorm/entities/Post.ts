import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("post_pkey", ["id"], { unique: true })
@Entity("post", { schema: "public" })
export class Post {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("boolean", { name: "published", default: () => "false" })
  published: boolean;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "authorId", referencedColumnName: "id" }])
  author: User;
}
