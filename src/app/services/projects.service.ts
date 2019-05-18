import { Injectable } from "@angular/core";
import { Project } from '../models/project.model';
import { Ticket } from '../models/ticket.model';
import { Comment } from '../models/comment.model';
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ProjectsService {
  projectSelected = new Subject<Project>();
  private project: Project[] = [
    new Project(1, 'Mellon Change Management', [
      new Ticket(1, 'Ticket Title 3', 'user@user.gr', '', [
        new Comment(1, '', '', ''),
        new Comment(2, '', '', ''),
      ]),
      new Ticket(2, 'Ticket Title 4', 'user@user.gr', '', [
        new Comment(1, '', '', ''),
      ]),
      new Ticket(3, 'Ticket Title 5', 'user@user.gr', '', [])
    ]),
    new Project(2, 'Mellon Field Services', [
      new Ticket(4, 'An issue to the MFS app', 'user@user.gr', '', []),
    ]),
    new Project(3, 'Jira', [
      new Ticket(5, 'Ticket Title 7', 'user@user.gr', '', [
        new Comment(1, '', '', ''),
        new Comment(1, '', '', ''),
      ]),
      new Ticket(6, 'Ticket Title 8', 'user@user.gr', '', []),
      new Ticket(7, 'Ticket Title 9', 'user@user.gr', '', [])
    ]),
  ];

  getProjects() {
    return this.project.slice();
  }

  getProject(index: number) {
    return this.project.find((project) => project.id === index);
  }

  addTicketToProject(projectId: number, ticket: Ticket) {
    const selectedProject = this.project.find((project) => project.id === projectId);
    selectedProject.tickets.push(ticket);
  }

  getProjectTicket(projectId: number, ticketId: number) {
    const selectedProject = this.project.find((project) => project.id === projectId);
    return selectedProject ? (selectedProject.tickets).find((ticket) => ticket.id === ticketId) : null;
  }
}
