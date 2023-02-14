import {Component} from '@angular/core';

@Component({
  selector: 'app-parent2',
  template: `
    <hr style="background-color: cyan;height: 15px">
    <div>
      <h1>Parrent</h1>
      <app-child2 (eventData)="childEvent($event)"></app-child2>
    </div>
    <hr style="background-color: cyan;height: 15px">
  `
})
export class ParentComponent {

  d: any;

  childEvent(obj: any) {
    // debugger;
  console.log(obj)
  console.log(obj.msg)
  }
}
