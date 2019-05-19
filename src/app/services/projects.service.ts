import { Injectable } from "@angular/core";
import { Project } from '../models/project.model';
import { Ticket } from '../models/ticket.model';
import { Comment } from '../models/comment.model';
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ProjectsService {
  projectSelected = new Subject<Project>();
  commentAdded = new Subject<Ticket>();
  private project: Project[] = [
    new Project(1, 'Mellon Change Management', [
      new Ticket(1, 'Ticket Title 3', 'user@user.gr', '', 'OPEN', [
        new Comment(1, 'Comment Title', 'Comment Body', 'user@user.gr'),
        new Comment(2, 'Comment Title 1', 'Comment Body 1', 'user@user.gr'),
      ]),
      new Ticket(2, 'Ticket Title 4', 'user@user.gr', '', 'CLOSED', [
        new Comment(1, 'Comment Title', 'Comment Body', 'user@user.gr'),
      ]),
      new Ticket(3, 'Ticket Title 5', 'user@user.gr', '', 'OPEN', [])
    ]),
    new Project(2, 'Mellon Field Services', [
      new Ticket(4, 'An issue to the MFS app', 'user@user.gr', '', 'OPEN', []),
    ]),
    new Project(3, 'Jira', [
      new Ticket(5, 'Ticket Title 7', 'user@user.gr', '', 'CLOSED', [
        new Comment(1, 'Comment Title', 'Comment Body', 'user@user.gr'),
        new Comment(1, 'Comment Title', 'Comment Body', 'user@user.gr'),
      ]),
      new Ticket(6, 'Ticket Title 8', 'user@user.gr', '', 'OPEN', []),
      new Ticket(7, 'Ticket Title 9', 'user@user.gr', '', 'OPEN', [])
    ]),
  ];

  getProjects() {
    /** Return a copy to all projects -- not the original array */
    return this.project.slice();
  }

  getProject(index: number) {
    /** Return a specific project */
    return this.project.find((project) => project.id === index);
  }

  addTicketToProject(projectId: number, ticket: Ticket) {
    /** Add a new ticket to a project */
    const selectedProject = this.project.find((project) => project.id === projectId);
    selectedProject.tickets.push(ticket);
  }

  addCommentToTicket(projectId: number, ticketId: number, comment: Comment) {
    /** Add a new comment to a ticket */
    const selectedProject = this.project.find((project) => project.id === projectId);
    const selectedTicket = selectedProject.tickets.find((ticket) => ticket.id === ticketId);
    selectedTicket.comment.push(comment);
    this.commentAdded.next(selectedTicket);
  }

  getProjectTicket(projectId: number, ticketId: number) {
    /** Return a ticket of a project */
    const selectedProject = this.project.find((project) => project.id === projectId);
    return selectedProject ? (selectedProject.tickets).find((ticket) => ticket.id === ticketId) : null;
  }
}
