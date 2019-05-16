import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  selectedTicket: Ticket;
  constructor() { }

  ngOnInit() {
  }

  onSelectedProject() {

  }

}
