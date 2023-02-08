import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  // templateUrl: './app.component.html',
  template: `
      <p>{{title}}</p>

      <input (keydown.shift.a)="ctsh()"  type="text" [value]="inputContent">
      <br><br>
      <button (click)="change()"  (click)="btn()">Click Count {{count}}</button><br>


      <img [src]="src" [width]="width">

      <app-home  [pageName]="title"   ></app-home>
      <!--   <img src="{{src}}" [width]="width"  >-->
  `,
  // styleUrls: ['./app.component.css']
  styles: [`strong {
    color: cyan
  }`]
})
export class AppComponent {
  title = 'Angular';
  count:number=0;
  src: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  width: number = 150;
  inputContent: string = "Salam";

  ctsh(){
    alert('shifta')
  }
  btn (){
    alert("Btn Click")
  }
  change() {
    this.count++;
  }
}
