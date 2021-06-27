import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllCompaniesComponent} from "./all-companies/all-companies.component";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {EditCompanyComponent} from "./edit-company/edit-company.component";

const routes: Routes = [
  {
    path: 'all-companies',
    component: AllCompaniesComponent
  },
  {
    path: 'add-company',
    component: AddCompanyComponent
  },
  {
    path: 'edit-company',
    component: EditCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {
}
