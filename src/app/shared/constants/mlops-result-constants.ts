import { ColDef } from 'ag-grid-community';

export const MLOPS_RESULT_COLUMN_NAME = {
    activeColumnNames: [
        {field: 'category', displayName: 'Category',flex:1},
        {field: 'scoreValue', displayName: 'Score', flex:1, maxWidth:120},
        {field: 'weightage', displayName: 'Weightage', flex:1, maxWidth:120},
        {field: 'weightageAvg', displayName: 'Weightage Avg(%)',flex:1, maxWidth:170}
    ],  
    enableSorting: [],
    enableFiltering: [],
};

export const MLOPS_RESULT_COLUMN_HEADER: ColDef[] = [
    {
        headerName: 'Category',
        field: 'category',
        width: 200,
        sortable: false,
        filter: false,
        colSpan: function (params) {
            const total = params.data.category;
            if (total == "Total") {
                return 3;
            }
            else {
                return 1;
            }
        }
    }, {
        headerName: 'Avg.Score',
        field: 'scoreValue',
        flex:1,
        maxWidth:120,
        sortable: false,
        filter: false
    }, {
        headerName: 'Weightage',
        field: 'weightage',
        flex:1,
        maxWidth:120,
        sortable: false,
        filter: false
    }, {
        headerName:'Weightage Avg(%)',
        field: 'weightageAvg',
        flex:1,
        minWidth:120,
        sortable: false,
        filter: false
    }
];