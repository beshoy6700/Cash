import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';


@NgModule({
  declarations: [
    AllCompaniesComponent,
    AddCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
