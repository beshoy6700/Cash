import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.sass']
})
export class FormPasswordComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
