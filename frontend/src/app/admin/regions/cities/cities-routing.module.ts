import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllCitiesComponent} from "./all-cities/all-cities.component";
import {AddCityComponent} from "./add-city/add-city.component";
import {EditCityComponent} from "./edit-city/edit-city.component";

const routes: Routes = [
  {
    path: 'all-cities',
    component: AllCitiesComponent
  },
  {
    path: 'add-city',
    component: AddCityComponent
  },
  {
    path: 'edit-city',
    component: EditCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule {
}
