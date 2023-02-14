import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <hr style="background-color: red;height: 15px">
    <div>
      <h1>Child11</h1>
      <h1 style="color: red"></h1>
    </div>
    <hr style="background-color: red;height: 15px">
  `
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.eventData.emit({msg: "salam"})
  };

  @Output() eventData: EventEmitter<any> = new EventEmitter();
}
