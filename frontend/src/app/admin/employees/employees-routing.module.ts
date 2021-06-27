import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddJobComponent} from "./add-job/add-job.component";
import {AddEmployeesComponent} from "./add-employees/add-employees.component";
import {EditEmployeesComponent} from "./edit-employees/edit-employees.component";
import {EditJobComponent} from "./edit-job/edit-job.component";
import {AllJobsComponent} from "./all-jobs/all-jobs.component";

const routes: Routes = [
  {
    path: 'add-job',
    component: AddJobComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeesComponent
  },
  {
    path: 'all-employees',
    component: AddEmployeesComponent
  },
  {
    path: 'all-jobs',
    component: AllJobsComponent
  },
  {
    path: 'edit-employees',
    component: EditEmployeesComponent
  },
  {
    path: 'edit-job',
    component: EditJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {
}
