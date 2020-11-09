import { Attribute, Directive, Renderer2, ElementRef, OnChanges, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLoadingButton]'
})
export class LoadingButtonDirective implements OnInit {

  originalInnerText: string;
  @Input() isLoading: boolean;

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    // Set the button to maintain the same dimensions, even once we put the spinner inside.
    this.el.nativeElement.style.height = `${(this.el.nativeElement as HTMLElement).offsetHeight}px`;
    this.el.nativeElement.style.width = `${(this.el.nativeElement as HTMLElement).offsetWidth}px`;
  }

  @HostListener('click') onMouseClick() {

  }

}