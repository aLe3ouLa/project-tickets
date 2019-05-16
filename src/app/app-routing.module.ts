import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectTicketsComponent } from './projects/project-tickets/project-tickets.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const routes: Routes = [
  {path: '', redirectTo: "projects", pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  // {path: 'projects/:id', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
