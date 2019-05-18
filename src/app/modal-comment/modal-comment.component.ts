import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Ticket } from '../models/ticket.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../services/projects.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-modal-comment',
  templateUrl: './modal-comment.component.html',
  styleUrls: ['./modal-comment.component.css']
})
export class ModalCommentComponent implements OnInit, OnDestroy {
  @Output() showModal = new EventEmitter<boolean>();
  private subscription: Subscription;
  private ticketSubscription: Subscription;
  private id: number;
  private ticketId: number;
  ticket: Ticket;

  constructor(
    private _projectService: ProjectsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    /** Initialization of the modal -- fetch ticket that this comment is from */
    this.subscription = this._route.parent.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.ticketSubscription = this._route.params.subscribe(
          (ticketParams: Params) => {
            this.ticketId = +ticketParams['ticketId'];
            this.ticket = this._projectService.getProjectTicket(
              this.id,
              this.ticketId
            );
          }
        );
      }
    );
  }

  ngOnDestroy() {
    /** Unsubscribe from the observables to avoid memory leaks when the modal is destroyed */
    this.ticketSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

  onSuccess(form: NgForm) {
    /** Submit form, with ngForms. Call the service to add the new Comment. */
    const value = form.value;
    if (this.ticket) {
      let lastId = 1;
      const commentsArray = this.ticket.comment;
      if (commentsArray.length > 0) {
        lastId = commentsArray[commentsArray.length - 1].id;
      }
      const comment = new Comment(
        ++lastId,
        value.title,
        value.body,
        value.user
      );
      this._projectService.addCommentToTicket(this.id, this.ticketId, comment); /** Call the service to add to Comments array */
      this.showModal.emit(false); /** Emmit event to parent to close the window */
    }
  }

  onReset() {
    /** Close window -- emit event to the callee */
    this.showModal.emit(false);
  }
}
