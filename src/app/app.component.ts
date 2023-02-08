import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  // templateUrl: './app.component.html',
  template: `<br><strong>Hello<br>{{title}}</strong>
  <hr> <br><strong>{{age|currency}}</strong>

  <app-home></app-home>`,
  // styleUrls: ['./app.component.css']
  styles: [`strong{color: cyan}`]
})
export class AppComponent {
  title = 'AngularPractise';
  age: number = 45;
}
