import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() selectedTicket: Ticket;
  constructor() { }

  ngOnInit() {
  }

}
