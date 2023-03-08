import {
  Component,
  Input
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-inline-error',
  templateUrl: './form-inline-error.component.html',
  styleUrls: ['./form-inline-error.component.scss']
})
export class FormInlineErrorComponent {

  @Input()
    errorControlName!: FormControl;
  @Input()
    isSubmitted!: boolean;
  @Input()
    messageConfig?: {
        required: string;
        pattern: string;
        whitespace?: string;
    };


  constructor() {}


}
