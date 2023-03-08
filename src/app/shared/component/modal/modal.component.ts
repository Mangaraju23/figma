import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ModalConfig } from './modal.config';
import { ModalService } from './service/modal.service';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input()
    public modalConfig!: ModalConfig;
    @Input()
    public id!: string;
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() public onClick = new EventEmitter<any>();

    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    public ngOnInit(): void {
        const modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    public ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    public open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
        this.element.focus();
    }

    // close modal
    public close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
        this.onClick.emit();
    }

    public dismiss(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}
