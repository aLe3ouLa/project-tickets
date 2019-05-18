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
    this.projects = this._projectService.getProjects();
  }

  onReset() {
    this.showModal.emit(false);
  }

  onSuccess(form: NgForm) {
    const value = form.value;
    if (this.project) {
      let lastId = this.project.tickets[this.project.tickets.length - 1].id;
      const ticket = new Ticket(++lastId, value.title, value.user, value.fileName, [] );
      this._projectService.addTicketToProject(this.project.id, ticket);
      this.showModal.emit(false);
    }
  }

  onSelectingProject(event) {
    this.project = this._projectService.getProject(+(event.target.value));
  }

}
