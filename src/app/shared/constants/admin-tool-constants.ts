import { ColDef } from 'ag-grid-community';

export const ASSESMENTS_COLUMN_NAME = {
    activeColumnNames: [
        {field: 'reqid', displayName: 'Req ID',flex:1},
        {field: 'assessmentname', displayName: 'Assesment Name', flex:1},
        {field: 'createdby', displayName: 'Created By', flex:1},
        {field: 'createdon', displayName: 'Created On',flex:1},
        {field: 'actions', displayName: 'Actions',flex:1}
    ],  
    enableSorting: [],
    enableFiltering: [],
};

export const QUESTIONS_COLUMN_NAME = {
    activeColumnNames: [
        {field: 'Reorder', displayName: 'Reorder',flex:1, maxWidth:150},
        {field: 'Question', displayName: 'Question', flex:1},
        {field: 'Assessment Name', displayName: 'Assessment Name', flex:1},
        {field: 'Category', displayName: 'Category',flex:1},
        {field: 'Actions', displayName: 'Actions',flex:1}
    ],  
    enableSorting: [],
    enableFiltering: [],
};

export const SECTIONS_COLUMN_NAME = {
    activeColumnNames: [
        {field: 'reorder', displayName: 'Re-Order',flex:1, maxWidth:150},
        {field: 'sectionname', displayName: 'Section Name', flex:1},
        {field: 'category', displayName: 'Category Name', flex:1},
        {field: 'weightage', displayName: 'Weightage',flex:1},
        {field: 'actions', displayName: 'Actions',flex:1}
    ],  
    enableSorting: [],
    enableFiltering: [],
};

export const ASSESMENTS_COLUMN_HEADER: ColDef[] = [
    {
        headerName: 'Req ID',
        field: 'reqid',
        width: 200,
        sortable: false,
        filter: false,
    }, {
        headerName: 'Assessment Name',
        field: 'assessmentname',
        flex:1,
        maxWidth:120,
        sortable: false,
        filter: false
    }, {
        headerName: 'Created By',
        field: 'createdby',
        flex:1,
        maxWidth:120,
        sortable: false,
        filter: false
    }, {
        headerName:'Created On',
        field: 'createdon',
        flex:1,
        minWidth:120,
        sortable: false,
        filter: false
    } , {
        headerName:'Actions',
        field: 'actions',
        flex:1,
        minWidth:120,
        sortable: false,
        filter: false
    }
];