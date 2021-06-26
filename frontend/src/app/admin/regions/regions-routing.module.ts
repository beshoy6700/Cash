import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "countries",
    loadChildren: () =>
      import("./countries/countries.module").then((m) => m.CountriesModule),
  },
  {
    path: "states",
    loadChildren: () =>
      import("./states/states.module").then((m) => m.StatesModule),
  },
  {
    path: "cities",
    loadChildren: () =>
      import("./cities/cities.module").then((m) => m.CitiesModule),
  },
  {
    path: "areas",
    loadChildren: () =>
      import("./areas/areas.module").then((m) => m.AreasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
