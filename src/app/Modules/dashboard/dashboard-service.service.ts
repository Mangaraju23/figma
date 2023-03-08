import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/shared/services/backend.services';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  public GET_ALL_DASHBOARD_DATA_API = '/ava/oneview/internal/api/project/list';
  public GET_PARTICULAR_DASHBOARD_DATA_API =
    '/ava/oneview/internal/api/project?';
  public UPDATE_ROW_DATA_API = '/ava/oneview/internal/api/project';
  public selected_Row!: any;
  public pageSize: number = 25;
  public isEditable : boolean = false;
  public isAdminView : boolean = false;

  constructor() {}
  public setPageSize(updatedPageSize: number) {
    this.pageSize = updatedPageSize;
  }

  


}
