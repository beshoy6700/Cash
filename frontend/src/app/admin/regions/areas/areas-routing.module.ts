import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllAreasComponent} from "./all-areas/all-areas.component";
import {AddAreaComponent} from "./add-area/add-area.component";
import {EditAreaComponent} from "./edit-area/edit-area.component";

const routes: Routes = [
  {
    path: 'all-areas',
    component: AllAreasComponent
  },
  {
    path: 'add-area',
    component: AddAreaComponent
  },
  {
    path: 'edit-area',
    component: EditAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule {
}
