import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public el: ElementRef) {
    console.log("CompFailureDirective")
    //el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
  this.highlight('red');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('black');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}