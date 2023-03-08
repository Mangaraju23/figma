import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { AddProjectComponent } from './Modules/dashboard/pages/add-project/add-project.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'dashboard'},
  {path: "dashboard",
  component: DashboardComponent,
  loadChildren: () => import('./Modules/dashboard/dashboard.module').then( (m) => m.DashboardModule ), data: { title: 'OneView | Dashboard', navLabel: 'Dashboard', navIcon: '', }, },
  // {path: "add", component: AddProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
