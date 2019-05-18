import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';

import { NgForm } from '@angular/forms';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-modal-add-issue',
  templateUrl: './modal-add-issue.component.html',
  styleUrls: ['./modal-add-issue.component.css']
})
export class ModalAddIssueComponent implements OnInit {
  @Output() showModal = new EventEmitter<boolean>();
  projects: Project[] = [];
  project: Project;

  constructor(private _projectService: ProjectsService) { }

  ngOnInit() {
    /** Get all the projects to fill the dropdown */
    this.projects = this._projectService.getProjects();
  }

  onReset() {
    /** Reset the form, send an event to the parent to close the modal */
    this.showModal.emit(false);
  }

  onSuccess(form: NgForm) {
    /** Submit form, with ngForms. Call the service to add the new Ticket. */
    const value = form.value;
    if (this.project) {
      let lastId = this.project.tickets[this.project.tickets.length - 1].id;
      const ticket = new Ticket(++lastId, value.title, value.user, value.fileName, [] );
      this._projectService.addTicketToProject(this.project.id, ticket);
      this.showModal.emit(false);
    }
  }

  onSelectingProject(event) {
    /** The project the user selected to add a ticket */
    this.project = this._projectService.getProject(+(event.target.value));
  }

}
