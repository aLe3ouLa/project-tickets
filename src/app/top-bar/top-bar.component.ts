import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() showModal = false;
  constructor() { }

  ngOnInit() {
  }

  onNewIssue() {
    this.showModal = true;
  }

  onReset(data: boolean) {
    this.showModal = data;
  }
}
