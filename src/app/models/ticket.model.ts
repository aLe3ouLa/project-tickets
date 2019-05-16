import { Comment } from './comment.model';

export class Ticket {
  constructor(
    public id: number,
    public title: string,
    public user: string,
    public filename: string,
    public comment: Comment[]
  ) {}
}
