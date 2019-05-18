import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ticketSubscription: Subscription;
  ticket: Ticket;
  private id: number;
  private ticketId: number;
  constructor(private _projectService: ProjectsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this._route.parent.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.id = +params['id'];
        this.ticketSubscription = this._route.params.subscribe(
          (params: Params) => {
            this.ticketId = +params['ticketId'];
            this.ticket = this._projectService.getProjectTicket(this.id, this.ticketId);
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.ticketSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

}
