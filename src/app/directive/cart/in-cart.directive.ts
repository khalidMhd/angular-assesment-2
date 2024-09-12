import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appInCart]',
  standalone: true
})
export class InCartDirective implements OnChanges {
  @Input() appInCart = false;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appInCart) {
      this.el.nativeElement.style.border = '2px solid green';
    } else {
      this.el.nativeElement.style.border = 'none';
    }
  }
}
