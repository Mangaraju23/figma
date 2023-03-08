import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ColDef, DomLayoutType, GridReadyEvent, RowClickedEvent, SuppressKeyboardEventParams } from 'ag-grid-community';
import { generateColumns } from './agGridTableUtiles';
import { ColumnConfigI, DefaultColDefI } from './models/agGridColumnConfig.model';


@Component({
    selector: 'app-table-grid',
    templateUrl: './table-grid.component.html',
    styleUrls: [
        './table-grid.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TableGridComponent implements OnInit {
    @Input() public paginationPageSize? : any;
    @Input() public rowData!: any[];
    @Input() public columnNames!: ColumnConfigI;
    @Input() public columnHeader?: ColDef[];
    @Input() public tableButtonsConfig: any[] = [];
    @Input() public defaultColDef: DefaultColDefI = {} as DefaultColDefI;
    @Input() public frameworkComponents?: {
        hyperlinkRenderer: any;
    };
    @Input() public rowSelection?: any;
    @Input() public components: any;
    @Input() public noRowsTemplate = `<span>No rows to show</span>`;
    @Input() public context?: any;
    @Input() public hidePagination?:boolean;
    @Input() public isAutoHeight!: DomLayoutType |undefined;

    @Output() public gridReady = new EventEmitter<GridReadyEvent>();
    @Output() public getRowsSelected = new EventEmitter<RowClickedEvent>();

    public gridApi?: any;

    public pageSize?: number;

    constructor() {
    }

    public ngOnInit() {
        // this.columnHeader = generateColumns(this.rowData, [], this.columnNames);
        // this.tableButtonsConfig.forEach((icon) => {
        //     this.columnHeader?.push(icon);
        // });
    }

    public onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridReady.emit(params);
    }

    public onSelectionChanged($event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
        this.getRowsSelected.emit(selectedRows);
    }

    public tabToNextCell(params:any) {
        return params.nextCellPosition;
    }

    public suppressKeyboardEvent = (params: any) => {
        const e = params.event;
        if (e.code === 'Tab' || e.key === 'Tab') {
            // get focusable children of parent cell
            const focusableChildrenOfParent = e.srcElement.closest('.ag-cell')
                .querySelectorAll('button, [href], :not(.ag-hidden) > input, select, textarea, [tabindex]:not([tabindex="-1"]), .icon-Help');

            if (focusableChildrenOfParent.length === 0 ||
                (e.shiftKey === false && e.srcElement === focusableChildrenOfParent[focusableChildrenOfParent.length - 1]) ||
                (e.shiftKey === true && e.srcElement === focusableChildrenOfParent[0]) ||
                (e.shiftKey === true && e.srcElement.classList.contains('ag-cell'))) {
                return false; // do not suppress
            }
            return true; // suppress
        }
        return false; // do not suppress by default
    }

    // public onPageSizeChanged() {
    //     this.gridApi.paginationSetPageSize(Number(this.myDropDownList.nativeElement.value));
    // }
}
