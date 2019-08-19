import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public el: ElementRef) {
    console.log("CompSuccessDirective")
    //el.nativeElement.style.backgroundColor = 'yellow';
  }


  @HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('black');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}


}