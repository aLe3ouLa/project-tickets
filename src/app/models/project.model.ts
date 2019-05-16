import { Ticket } from './ticket.model';

export class Project {
  constructor(
    public id: number,
    public title: string,
    public tickets: Ticket[]
  ) {}
}
