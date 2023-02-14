import {Component} from '@angular/core';

@Component({
  selector: 'app-parent33',
  template: `
    <div style="background-color: #515757">
      <h1>Parent</h1>
      <br>
      <app-child11 (data)="childdata($event)"></app-child11>
      <br>
      <app-child22 [data]="msg"></app-child22>
      <br>
    </div>`
})
export class Parent33Component {
  msg: string;
  childdata(data: string) {
    this.msg = data;
  }
}
