import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child11',
  template: `
    <div style="background-color: #18dede">
      <h1>Child11</h1>
    </div>`
})
export class Child11Component implements OnInit {
  @Output() data: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.data.emit("Cgild11 den gelen data")
  }


}
