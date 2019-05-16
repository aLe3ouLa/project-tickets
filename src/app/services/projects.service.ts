import { Injectable } from "@angular/core";
import { Project } from '../models/project.model';
import { Ticket } from '../models/ticket.model';
import { Comment } from '../models/comment.model';

@Injectable({ providedIn: 'root'})
export class ProjectsService {
  private project: Project[] = [
    new Project(1, 'Mellon Change Management', [
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', [
        new Comment(1, '', '', ''),
        new Comment(1, '', '', ''),
      ]),
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', [
        new Comment(1, '', '', ''),
      ]),
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', [])
    ]),
    new Project(2, 'Mellon Field Services', [
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', []),
    ]),
    new Project(3, 'Jira', [
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', [
        new Comment(1, '', '', ''),
        new Comment(1, '', '', ''),
      ]),
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', []),
      new Ticket(1, 'Ticket Title 1', 'user@user.gr', '', [])
    ]),
  ];

  getProjects() {
    return this.project.slice();
  }
}
