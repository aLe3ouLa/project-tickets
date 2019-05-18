import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectTicketsComponent } from './projects/project-tickets/project-tickets.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectStartComponent } from './projects/project-start/project-start.component';

const routes: Routes = [
  {path: '', redirectTo: "projects", pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, children: [
    {path:"", component: ProjectStartComponent },
    {path: ":id", component: ProjectTicketsComponent, children:[
      {path:"tickets/:ticketId", component: ProjectDetailsComponent}
    ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
