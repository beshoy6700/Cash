import { Component, OnInit } from '@angular/core';
import {Field} from "../../containers/models/field.interface";
import {FieldConfig} from "../../containers/models/field-config.interface";
import {FormGroup} from "@angular/forms";
import {ServerApiService} from "../../../../core/service/server-api.service";

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.sass']
})
export class FormUploadComponent implements Field, OnInit {

  config: FieldConfig;
  group: FormGroup;value: null;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.xls,.xlsx,.csv",
    maxSize: "1",
    uploadAPI:  {
      url: this.serverApi.API_UPLOAD_URL,
      headers: {
        "Authorization" : null,
        "X-KEY_PATH": null
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false
  };
  constructor(private serverApi : ServerApiService){}
  ngOnInit(): void {
    // send auth token
    let token = localStorage.getItem('token');
    this.afuConfig.uploadAPI.headers.Authorization = `Bearer ${token}`;
    // send key path
    this.afuConfig.uploadAPI.headers['X-KEY_PATH'] = this.config.options.uploadKeyPath?this.config.options.uploadKeyPath: '';
  }

  afterUpload(data): void{
    let response = JSON.parse(data.response);
    if(response.status == 'ok'){
      let values = {};
      values[this.config.name] = response.file_path;
      this.group.patchValue(values);
    }
  }

}
