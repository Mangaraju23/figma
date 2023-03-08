import { Directive, ElementRef, AfterViewInit } from '@angular/core';


@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[trapFocus]'
})
export class TrapFocusDirective implements AfterViewInit {
    constructor(private el: ElementRef) {}

    public ngAfterViewInit() {
        this.trapFocus(this.el.nativeElement);
    }

    public trapFocus(element : Element) {
        const focusableEls1 = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"],' +
            'input[type="radio"], input[type="checkbox"], select'
        );
        const focusableEls = Array.from(focusableEls1).filter( (el: any) => !el.disabled);
        const firstFocusableEl: any = focusableEls[0];
        const lastFocusableEl: any = focusableEls[focusableEls.length - 1];

        element.addEventListener('keydown', function(e: any ) {
            const isTabPressed = e.keyCode === 9;

            if (!isTabPressed) return;

            if ( e.shiftKey ) /* shift + tab */ {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else /* tab */ {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    }
}
