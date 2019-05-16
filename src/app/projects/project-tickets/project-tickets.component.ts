import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-project-tickets',
  templateUrl: './project-tickets.component.html',
  styleUrls: ['./project-tickets.component.css']
})
export class ProjectTicketsComponent implements OnInit {
  @Input() tickets: Ticket[];
  constructor() { }

  ngOnInit() {
  }

}
