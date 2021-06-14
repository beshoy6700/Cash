import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-multi-select',
  templateUrl: './form-multi-select.component.html',
  styleUrls: ['./form-multi-select.component.sass']
})
export class FormMultiSelectComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
