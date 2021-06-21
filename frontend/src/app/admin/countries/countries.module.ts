import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';
import {AllCountriesComponent} from './all-countries/all-countries.component';
import {CountriesService} from "./countries.service";
import { AddCountryComponent } from './add-country/add-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../shared/shared.module";
import { CreateComponent } from './create/create.component';
import {CardModule} from "../../layout/shared/components/card/card.module";
import {DynamicFormModule} from "../../shared/dynamic-form/dynamic-form.module";
import {MatProgressButtonsModule} from "mat-progress-buttons";


@NgModule({
  declarations: [
    AllCountriesComponent,
    AddCountryComponent,
    EditCountryComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    MatProgressButtonsModule,
    SharedModule,
    CardModule,
    DynamicFormModule,
  ],
  providers: [
    CountriesService
  ]
})
export class CountriesModule {
}
