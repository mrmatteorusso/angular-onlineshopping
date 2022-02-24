import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css'],
})
export class CountersComponent implements OnInit {
  selectRadioButtonValue: string = 'total';

  constructor() {}

  ngOnInit(): void {}

  @Input()
  numTotalProducts: number = 0;
  @Input()
  numAvailableProducts: number = 0;

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);
    console.log(this.selectRadioButtonValue);
  }
}
