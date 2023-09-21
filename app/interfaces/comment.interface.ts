import { User } from "./user.interface";

export interface Comment {
  text: string;
  parent: Comment | null;
  likes: number;
  user: User;
  _id: string;
}
