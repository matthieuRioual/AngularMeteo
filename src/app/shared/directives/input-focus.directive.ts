import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective {

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.setStyle(this._el.nativeElement, 'transform', 'scale(1.5)');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(this._el.nativeElement, 'transform', 'scale(1)');
  }

}
