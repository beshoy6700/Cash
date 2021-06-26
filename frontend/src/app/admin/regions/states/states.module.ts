import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states-routing.module';
import { AllStatesComponent } from './all-states/all-states.component';
import { AddStateComponent } from './add-state/add-state.component';
import { EditStateComponent } from './edit-state/edit-state.component';


@NgModule({
  declarations: [
    AllStatesComponent,
    AddStateComponent,
    EditStateComponent
  ],
  imports: [
    CommonModule,
    StatesRoutingModule
  ]
})
export class StatesModule { }
