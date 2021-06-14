import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.sass']
})
export class FormDateComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

}
