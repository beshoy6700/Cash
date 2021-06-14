import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.sass']
})
export class FormEditorComponent implements Field, OnInit {

  config: FieldConfig;
  group: FormGroup;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: null,
    translate: 'yes',
    /*uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
        {
            name: "quote",
            class: "quote",
        },
        {
            name: 'redText',
            class: 'redText'
        },
        {
            name: "titleText",
            class: "titleText",
            tag: "h1",
        },
    ]*/
  };

  ngOnInit(): void {
    this.editorConfig.placeholder = this.config.placeholder;
  }

}
