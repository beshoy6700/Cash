import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AllAreasComponent } from './all-areas/all-areas.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { EditAreaComponent } from './edit-area/edit-area.component';


@NgModule({
  declarations: [
    AllAreasComponent,
    AddAreaComponent,
    EditAreaComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule
  ]
})
export class AreasModule { }
