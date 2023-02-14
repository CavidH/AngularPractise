import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `

      <div *appCustomIf="true">Hello</div>
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
  isVerdana = true;
  isSegoe = true;
}
