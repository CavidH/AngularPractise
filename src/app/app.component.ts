import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  // templateUrl: './app.component.html',
  template: `
      <input type="text" #hihi value="155S" name="" id="">
      <h1>{{hihi.value}}</h1>
      <h1 ngNonBindable>{{hihi.value}}</h1>

      <h1>{{15 + 6565}}</h1>
      <!--    <h1>{{btn()}}</h1>-->
      <p>{{title}}</p>

      <input (keydown.shift.a)="ctsh()"
             type="text" [value]="title" [(ngModel)]="title"><br>
      <input type="number" [value]="width" [(ngModel)]="width">

      <br><br>

      <button (click)="change()" (click)="btn()">Click Count {{count}}</button><br>


      <img [src]="src" [width]="width">

      <app-home [pageName]="title"></app-home>
      <!--   <img src="{{src}}" [width]="width"  >-->
  `,
  // styleUrls: ['./app.component.css']
  styles: [`strong {
      color: #06fdfd
  }`]
})
export class AppComponent {
  title = 'Angular';

  count: number = 0;
  src: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  width: number = 150;
  inputContent: string = "Salam";

  ctsh() {
    alert('shifta')
  }

  btn() {
    alert("Btn Click")
  }

  change() {
    this.count++;
  }
}
