import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectTicketsComponent } from './projects/project-tickets/project-tickets.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ModalAddIssueComponent } from './modal-add-issue/modal-add-issue.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectTicketsComponent,
    ProjectDetailsComponent,
    ProjectStartComponent,
    ModalAddIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
