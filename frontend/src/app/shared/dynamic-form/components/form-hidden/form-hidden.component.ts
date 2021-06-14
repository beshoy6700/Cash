import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-hidden',
  templateUrl: './form-hidden.component.html',
  styleUrls: ['./form-hidden.component.sass']
})
export class FormHiddenComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
