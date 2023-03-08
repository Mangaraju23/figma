import { ColDef } from 'ag-grid-community';
import { ColumnConfigI } from './models/agGridColumnConfig.model';

/***
 *Generating Dynamic Column Header based on URL request
 *
 * @param {any[]} data
 * @return {*}
 * @memberof SingleUrlComponent
 */
export const generateColumns = (
  rowData: any[],
  addRowIconsList: ColDef[] = [],
  columnNames: ColumnConfigI
): ColDef[] => {
  let columnDefinitions: ColDef[] = [];

  if (rowData) {
    rowData.map((object) => {
      columnNames.activeColumnNames.map((key, index) => {
        if (object.hasOwnProperty(key.field)) {
          const mappedColumn: ColDef = {
            headerName: key.displayName,
            field: key.field,
            sortable:
              columnNames.enableSorting.findIndex((k) => k === key.field) !== -1
                ? true
                : false,
            filter:
              columnNames.enableFiltering.findIndex((k) => k === key.field) !==
              -1
                ? true
                : false,
            flex: key.flex === 0 ? 0 : 1,
            width: key.width,
            minWidth: key.minWidth,
            maxWidth: key.maxWidth,
            type: key.type,
            // cellRenderer: key.field  === 'status' ? 'statusIndicator' : '',
            // checkboxSelection: index === 0 ? true : false,
            // headerCheckboxSelection: index === 0 ? true : false,
            // headerCheckboxSelectionFilteredOnly: index === 0 ? true : false
          };
          if (key.field === 'ragStatus') {
            if (key.cellRenderer) {
              mappedColumn.cellRendererFramework = key.cellRenderer;
            } else {
              mappedColumn.cellRenderer = 'statusIndicator';
            }
          }
          if (key.field === 'project') {
            if (key.cellRenderer) {
              mappedColumn.cellRendererFramework = key.cellRenderer;
            } else {
              // mappedColumn.cellRenderer = 'hyperlinkRenderer';
            }
          }
          if (key.field === 'client') {
            mappedColumn.sort = 'asc';
          }
          columnDefinitions.push(mappedColumn);
        }
      });
    });
  }

  // remove duplicate columns
  columnDefinitions = columnDefinitions.filter(
    (column, index, self) =>
      index ===
      self.findIndex((colAtIndex) => colAtIndex.field === column.field)
  );

  if (addRowIconsList.length > 0) {
    addRowIconsList.forEach((iconItem) => {
      const rowIndex = columnDefinitions.findIndex(
        (ele) =>
          ele.headerName?.toLowerCase() === iconItem.headerName?.toLowerCase()
      );

      // check if the rowIcon list is already existing in the columnDowefinitions, if yes merge the 2 objects or push it to the array
      if (rowIndex !== -1) {
        // columnDefinitions[rowIndex] = Object.assign({}, columnDefinitions[rowIndex], iconItem);
        columnDefinitions[rowIndex] = {
          ...columnDefinitions[rowIndex],
          cellRenderer: iconItem.cellRenderer,
          cellClass: iconItem.cellClass ? iconItem.cellClass : '',
        };
      } else {
        columnDefinitions.push(iconItem);
      }
    });
  }

  return columnDefinitions;
};
