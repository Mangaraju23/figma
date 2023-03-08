import { ElementRef, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FocusInvalidService {

    constructor(

    ) { }

    focusInvalidFormControl(el: ElementRef, inputFG: FormGroup) {
        for (const FORM_CONTROLS of Object.keys(inputFG.controls)) {
            if (inputFG.controls[FORM_CONTROLS].invalid) {
                const InvalidControl = el.nativeElement?.querySelector('#' + FORM_CONTROLS + '.ng-invalid');
                InvalidControl.focus();
                InvalidControl.click();
                break;
            }
        }
    }

    focusInvalidQuestion(el: ElementRef, inputFG: FormGroup) {
        for (const FORM_CONTROLS of Object.keys(inputFG.controls)) {
            if (inputFG.controls[FORM_CONTROLS].invalid) {
                const InvalidControl = el.nativeElement?.querySelector('legend#Question'+FORM_CONTROLS);
                InvalidControl.scrollIntoView({behavior: 'smooth'});
                InvalidControl.focus();
                InvalidControl.click();
                break;
            }
        }
    }
}
