import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllCountriesComponent} from "./all-countries/all-countries.component";
import {AddCountryComponent} from "./add-country/add-country.component";
import {EditCountryComponent} from "./edit-country/edit-country.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {
    path: 'allCountries',
    component: AllCountriesComponent
  },
  {
    path: 'add-country',
    component: AddCountryComponent
  },
  {
    path: 'create',
    component: CreateComponent
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
