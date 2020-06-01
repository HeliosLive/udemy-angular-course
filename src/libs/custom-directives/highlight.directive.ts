import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = "orange";
  }

  // @HostListener("mouseenter") onMouseEnter() {
  //   this.highlight("yellow");
  // }

  // @HostListener("mouseleave") onMouseLeave() {
  //   this.highlight("orange");
  // }

  @HostListener("mouseenter") onMouseEnter() {
    // this.makeInvisible();
    this.makeBigger();
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this.makeVisible();
    this.makeSmaller();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  makeVisible() {
    this.el.nativeElement.style = "visibility:visible";
  }

  makeInvisible() {
    this.el.nativeElement.style = "visibility:hidden";
  }

  makeBigger() {
    this.el.nativeElement.style = "font-size:2rem";
  }

  makeSmaller() {
    this.el.nativeElement.style = "font-size:0.8rem";
  }
}
