import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-project-tickets',
  templateUrl: './project-tickets.component.html',
  styleUrls: ['./project-tickets.component.css']
})
export class ProjectTicketsComponent implements OnInit {
  @Input() tickets: Ticket[];
  @Output() ticketSelected = new EventEmitter<Ticket>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(ticket) {
    this.ticketSelected.emit(ticket);
  }

}
