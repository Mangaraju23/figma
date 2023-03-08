import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    @Input() prg!: number;

    constructor() { }

    ngOnInit(): void {
        this.loadProgressBar();
    }

    loadProgressBar() {
        if (this.prg >= 0 && this.prg <= 100) {

        }
        else {
            console.error("Progress Bar % cannot be more than 100 or less than 0")
            this.prg = 0;
        }
    }

}
