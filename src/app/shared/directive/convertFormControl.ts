import { AbstractControl, FormControl } from "@angular/forms";

export function convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }