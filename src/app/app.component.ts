import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  // templateUrl: './app.component.html',
  template:  `
  <p>{{title}}</p>
  `
 ,
  // styleUrls: ['./app.component.css']
  styles: [`strong{color: cyan}`]
})
export class AppComponent {
  title = 'Angular';
  age: number = 45;
}
