import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent},
  { path: "add", component: AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
