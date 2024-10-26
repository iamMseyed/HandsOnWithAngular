import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomD]' //selector
})
export class CustomDDirective {

  constructor(el:ElementRef) {  // get the ref of element where selector director is applied ( top )
    //console.log(el);
    el.nativeElement.style.border='2px dashed green'; // applied to those where cutomer directive is used
    el.nativeElement.style.color='Red';
  }

}
