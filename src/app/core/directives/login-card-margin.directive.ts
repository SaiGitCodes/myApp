import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoginCardMargin]'
})
export class LoginCardMarginDirective {
  /**
   * 
   * @param el 
   * @param render 
   */

  constructor(private el: ElementRef,
    private render: Renderer2) { }

  ngOnInit() {
    console.log('directive', this.el);
    const height = this.el.nativeElement.getBoundingClientRect().height;
    console.log('height:', height);
    this.render.setStyle(this.el.nativeElement, 'margin-top', `${(window.innerHeight - height) / 2}px`)
  }

}
