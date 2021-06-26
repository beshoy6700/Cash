import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';


@NgModule({
  declarations: [
    AllEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
    AddJobComponent,
    EditJobComponent,
    AllJobsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
