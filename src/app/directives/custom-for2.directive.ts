import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomFor2]'
})
export class CustomFor2Directive {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  @Input()
  set appCustomFor2(values: string[]) {
    for (let i = 0; i < values.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef,
      {
        element: values[i],
        index:i
      }
    )
    }
  }
}
