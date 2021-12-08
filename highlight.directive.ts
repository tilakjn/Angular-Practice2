import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="green";
    el.nativeElement.style.backgroundColor="khaki";
  }

}
