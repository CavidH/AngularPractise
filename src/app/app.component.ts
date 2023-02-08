import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<br><strong>Hello<br>{{title}}</strong>
  <hr> <br><strong>{{age|currency}}</strong> `,
  // styleUrls: ['./app.component.css']
  styles: [`strong{color: cyan}`]
})
export class AppComponent {
  title = 'AngularPractise';
  age: number = 45;
}
