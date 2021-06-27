import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllStatesComponent} from "./all-states/all-states.component";
import {AddStateComponent} from "./add-state/add-state.component";
import {EditStateComponent} from "./edit-state/edit-state.component";

const routes: Routes = [
  {
    path: 'all-state',
    component: AllStatesComponent
  },
  {
    path: 'add-state',
    component: AddStateComponent
  },
  {
    path: 'edit-state',
    component: EditStateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule {
}
