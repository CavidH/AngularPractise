import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  template:`<br><strong>Hellor</strong>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractise';
  age:number=45;
}
