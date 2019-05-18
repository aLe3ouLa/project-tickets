import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  @Input() showModal = false;

  constructor(private _projectService: ProjectsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    /** Get the projects' tickets */
    this.subscription = this._route.parent.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.ticketSubscription = this._route.params.subscribe(
          (ticketParams: Params) => {
            this.ticketId = +ticketParams['ticketId'];
            this.ticket = this._projectService.getProjectTicket(this.id, this.ticketId);
          }
        );
      }
    );

    /** Watch the ticket for change in comments */
    this._projectService.commentAdded.subscribe(
      ticket => {
        this.ticket = ticket;
      }
    );
  }


  ngOnDestroy() {
    /** Destroy the subscriptions in case the objects is destroyed */
    this.ticketSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

  /** Close OR open modal functions */
  onReset() {
    this.showModal = false;
  }

  onAddComment() {
    this.showModal = true;
  }

}
