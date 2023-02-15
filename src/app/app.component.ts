import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `


<!--    <app-parent33></app-parent33>-->
<!--    <app-parent2></app-parent2>-->
      <div *appCustomIf="true">Hello</div>
      <ul>
          <li *appCustomFor="4 let i=index">{{i}} Hello</li>
      </ul>

      <ul>
          <li *appCustomFor2="names;let el=element;let in=index">{{in}} {{el}}</li>
      </ul>

      <h1 appBold color="cyan">sdlfkdspkfl</h1>

      <p [ngClass]="{segoePrintFont:isSegoe}">
          Angular modul proqram arxitekturasını təqdim edir </p>

  `,
  styles: [
    `    .segoePrintFont {
        font-size: 14px;
        font-family: "Segoe Print";
    }`
  ]
})
export class AppComponent {
  //color:string;

  names:string[]=['Cavid','Nicat','ibrahim']
  isVerdana = true;
  isSegoe = true;
}
