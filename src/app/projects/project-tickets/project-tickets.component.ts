import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-tickets',
  templateUrl: './project-tickets.component.html',
  styleUrls: ['./project-tickets.component.css']
})
export class ProjectTicketsComponent implements OnInit {
  project: Project;
  private id: number;
  constructor(private _projectService: ProjectsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    /** Get the project you navigated to */
    this._route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.project = this._projectService.getProject(this.id);
      }
    );
  }


}
