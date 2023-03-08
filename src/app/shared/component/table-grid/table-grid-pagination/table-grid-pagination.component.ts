import { Component, Input } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { DashboardServiceService } from 'src/app/Modules/dashboard/dashboard-service.service';

@Component({
  selector: 'app-table-grid-pagination',
  templateUrl: './table-grid-pagination.component.html',
  styleUrls: ['./table-grid-pagination.component.scss'],
})
export class TableGridPaginationComponent {
  @Input() gridApi!: GridApi;
  public pageSize = 25;
  public isPageSizeChanged: boolean = false;

  constructor(private _dashboard: DashboardServiceService) {
    this.pageSize = this._dashboard.pageSize;
  }

  get pageNumbers(): number[] {
    return this.gridApi
      ? Array.from(
          { length: this.gridApi.paginationGetTotalPages() },
          (_, index) => index + 1
        )
      : [];
  }

  get currentPageNo(): number {
    return this.gridApi ? this.gridApi.paginationGetCurrentPage() + 1 : 0;
  }

  get currentRecordsOfTotal() {
    const from =
      this.gridApi.paginationGetCurrentPage() *
        this.gridApi.paginationGetPageSize() +
      1;
    const offsetCount =
      this.gridApi.paginationGetRowCount() %
      this.gridApi.paginationGetPageSize();
    const to =
      this.gridApi.paginationGetCurrentPage() + 1 ===
      this.gridApi.paginationGetTotalPages()
        ? this.gridApi.getDisplayedRowCount()
        : (this.gridApi.paginationGetCurrentPage() + 1) *
          this.gridApi.paginationGetPageSize();
    return this.gridApi
      ? `${from} to ${to} of ${this.gridApi.paginationGetRowCount()}`
      : '';
  }

  get pageSizeList() {
    const pageSizeArry = ['25', '50', '100', '150', '200', '250', '500'];
    const pageSizes = [];
    pageSizeArry.reduce((begin, item) => {
      const end = parseInt(item, 10);
      if (this.gridApi.paginationGetRowCount() > begin) {
        pageSizes.push(end);
      }
      return end;
    }, 0);
    if (this.gridApi.paginationGetRowCount() > 500) {
      pageSizes.push('All');
    }
    return pageSizes;
  }

  public onPageSizeChanged(event: any) {
    if (this.gridApi) {
      this._dashboard.setPageSize(Number(event.currentTarget.value));
      this.isPageSizeChanged = true;
      this.gridApi.paginationGoToFirstPage();
      if (event.currentTarget.value === 'All') {
        this.gridApi.paginationSetPageSize(this.gridApi.getDisplayedRowCount());
      } else {
        this.gridApi.paginationSetPageSize(Number(event.currentTarget.value));
      }
    }
  }

  public goto(page: number) {
    if (this.gridApi) {
      this.gridApi.paginationGoToPage(page - 1);
    }
  }

  public onButtonFirst() {
    this.gridApi.paginationGoToFirstPage();
  }

  public onButtonLast() {
    this.gridApi.paginationGoToLastPage();
  }

  public onButtonNext() {
    this.gridApi.paginationGoToNextPage();
  }

  public onButtonPrevious() {
    this.gridApi.paginationGoToPreviousPage();
  }

  public gotoPage(pageNo: any) {
    // we say page 4, as the first page is zero
    this.gridApi.paginationGoToPage(pageNo);
  }

  public pageRange(page: number, pageCount: number): number[] {
    var start = page - 2,
      end = page + 2;

    if (end > pageCount) {
      start -= end - pageCount;
      end = pageCount;
    }
    if (start <= 0) {
      end += (start - 1) * -1;
      start = 1;
    }

    end = end > pageCount ? pageCount : end;

    let startToEndArr = [];
    for (let i = start; i <= end; i++) {
      startToEndArr.push(i);
    }

    return startToEndArr;
  }
}
