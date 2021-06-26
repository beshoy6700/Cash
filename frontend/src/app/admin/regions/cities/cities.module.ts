import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { AddCityComponent } from './add-city/add-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';


@NgModule({
  declarations: [
    AllCitiesComponent,
    AddCityComponent,
    EditCityComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule { }
