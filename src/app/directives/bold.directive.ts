import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {Input} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit{
  @Input() color:string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2){


  }

@HostListener("click")
  onClick(){
    alert("sdfsdf")
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.setFontWeight("bold");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setFontWeight("normal");
  }
  ngOnInit(): void {
    //this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.color = this.color;
  }
  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);

  }

}
