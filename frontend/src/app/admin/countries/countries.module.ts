import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';
import {AllCountriesComponent} from './all-countries/all-countries.component';
import {CountriesService} from "./countries.service";
import { AddCountryComponent } from './add-country/add-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';


@NgModule({
  declarations: [
    AllCountriesComponent,
    AddCountryComponent,
    EditCountryComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  providers: [
    CountriesService
  ]
})
export class CountriesModule {
}
