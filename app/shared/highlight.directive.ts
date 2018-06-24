import { ElementRef, Directive, Input, Renderer } from '@angular/core';


@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'background-color', 'yellow');
    }
}