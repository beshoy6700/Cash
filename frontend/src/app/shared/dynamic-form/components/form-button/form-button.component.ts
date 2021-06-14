import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../containers/models/field-config.interface";

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.sass']
})
export class FormButtonComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
