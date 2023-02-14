import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child22',
  template: `
    <div style="background-color: #5e45c2">
      <h1>Child22</h1>
      <h1>{{data}}</h1>

    </div>`
})
export class Child22Component {

  @Input() data:string="Boom";

}
