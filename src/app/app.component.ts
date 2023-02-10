import {Component} from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `<h1>sdlfkdspkfl</h1>

  <p [ngClass]="{segoePrintFont:isSegoe}">
    Angular modul proqram arxitekturasını təqdim edir  </p>
  `,
  styles: [
    `.verdanaFont {
      font-size: 13px;
      font-family: Verdana;
    }

    .segoePrintFont {
      font-size: 14px;
      font-family: "Segoe Print";
    }`
  ]
})
export class AppComponent {
  isVerdana = true;
  isSegoe = true;
}
