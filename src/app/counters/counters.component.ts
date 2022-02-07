import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css'],
})
export class CountersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() numTotalProducts: number = 0;
  @Input() numAvailableProducts: number = 0;
}
