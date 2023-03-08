import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterEvent } from '@angular/router';
import { ButtonConfig, ColumnConfigI } from '@collab/comp-library';
import { ColDef } from 'ag-grid-enterprise';
import { DEFAULT_COL_DEF } from 'src/app/shared/constants/constants';
import { CompleteProjectResponseI } from 'src/app/shared/models/project-dashboard-new-model';
import { DashboardService } from '../../services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SECTION_DUMMY_DATA } from 'src/app/shared/constants/admin-dummy-constants';
import { SECTIONS_COLUMN_NAME } from 'src/app/shared/constants/admin-tool-constants';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {   

  public buttonConfig: ButtonConfig = {text: ' + Add',buttonType: 'primary',imageUrl: '',linkURL: ''};
  public defaultColDef = DEFAULT_COL_DEF;

  public columnNames:any = [
    {field: "Name", displayName: "Name"},
    {field: "SerName", displayName: "Ser Name"}
  ]
  public rowData:any[] = [
    {Name: "Mangaraju", SerName: "Nalla"},
    {Name: "Harish", SerName: "Simhadri"}
  ]

  public components = []
  // public defaultColDef = DEFAULT_COL_DEF;


  constructor(private _route: Router, http: HttpClient) { 

  }

  ngOnInit(): void {
    // this.rowData$ = this.http.get("https://dev-api.avateam.io/ava/oneview/internal/api/project/list")
    // console.log(this.rowData$)
  }

  openCreateNewProject() {
    console.log('Clicked')
    this._route.navigate(['dashboard/add'])
  }

}
