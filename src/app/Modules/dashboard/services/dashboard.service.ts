import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/shared/services/backend.services';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public GET_ALL_DASHBOARD_DATA_API = '/ava/oneview/internal/api/project/list';

  constructor(private _backend: BackendService) { }

  public getProjectDashboard(): Observable<any> {
    return this._backend.get(this.GET_ALL_DASHBOARD_DATA_API);
  }
}
