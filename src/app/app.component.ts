import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  // templateUrl: './app.component.html',
  template:  `
      <p>{{title}}</p>

      <input type="text" [value]="inputContent">

      <button>Click</button><br>

      <img [src]="src" [width]="width">
      <!--   <img src="{{src}}" [width]="width"  >-->
  ` ,
  // styleUrls: ['./app.component.css']
  styles: [`strong{color: cyan}`]
})
export class AppComponent {
  title = 'Angular';
  src:string='https://angular.io/assets/images/logos/angular/angular.png';
  width:number=150;
  inputContent:string="Salam";
}
