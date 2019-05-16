import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Output() projectSelected = new EventEmitter<Project>();
  projects: Project[] = [];
   constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onSelected(recipe: Project) {
    this.projectSelected.emit(recipe);
  }

}
