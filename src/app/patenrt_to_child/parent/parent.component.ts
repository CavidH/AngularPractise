import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <hr style="background-color: cyan;height: 15px">
      <div>
          <h1>Parrent</h1>
          <app-child [childData]="data"></app-child>
      </div>
    <hr style="background-color: cyan;height: 15px">
  `
})
export class ParentComponent {

  data:any="Parentden Childe Salamlar";
}
