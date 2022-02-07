import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockie-notification',
  templateUrl: './cockie-notification.component.html',
  styleUrls: ['./cockie-notification.component.css'],
})
export class CockieNotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
