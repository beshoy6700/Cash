import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.sass']
})
export class FormNumberComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
