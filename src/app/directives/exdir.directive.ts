import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appExdir]'
})
export class ExdirDirective {

  constructor(private elementRef: ElementRef){

    this.elementRef.nativeElement.style.fontWeight = "bold";
  }

}
