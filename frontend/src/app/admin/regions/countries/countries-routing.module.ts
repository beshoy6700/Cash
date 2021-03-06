import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllCountriesComponent} from "./all-countries/all-countries.component";
import {EditCountryComponent} from "./edit-country/edit-country.component";
import {AddCountryComponent} from "./add-country/add-country.component";

const routes: Routes = [
  {
    path: 'all-countries',
    component: AllCountriesComponent
  },
  {
    path: 'add-country',
    component: AddCountryComponent
  },
  {
    path: 'edit-country',
    component: EditCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
