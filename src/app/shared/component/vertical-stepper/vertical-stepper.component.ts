import { Component, Input, OnInit } from '@angular/core';

export interface StepModel {
    id: number,
    title: string
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'vertical-stepper',
    templateUrl: './vertical-stepper.component.html',
    styleUrls: ['./vertical-stepper.component.scss']
})

export class VerticalStepperComponent implements OnInit {
    status: any; // Can be active/inactive/completed node

    @Input() steps!: StepModel[];
    @Input() flag: number = 0;


    constructor() { }

    ngOnInit(): void {
        if (!this.steps) {
            console.error("Error on Loading Sections");
        }
    }

    getStatus(step: StepModel): string {
        if (step.id == this.flag) {
            return 'active';
        }
        else if (step.id != this.flag && step.id < this.flag) {
            return 'completed';
        }
        else{
            return '';
        }
    }

    nextStep() {
        this.flag = this.flag + 1;
    }

    prevStep() {
        this.flag = this.flag - 1;
    }
}
