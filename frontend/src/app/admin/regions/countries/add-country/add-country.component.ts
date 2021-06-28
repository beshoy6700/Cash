import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatProgressButtonOptions} from "mat-progress-buttons";
import {CountriesService} from "../countries.service";
import {ServerApiService} from "../../../../core/service/server-api.service";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.sass']
})
export class AddCountryComponent implements OnInit {
  barButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: "اضافة",
    buttonColor: "primary",
    barColor: "primary",
    raised: true,
    stroked: false,
    mode: "indeterminate",
    value: 0,
    disabled: false,
    fullWidth: false,
    buttonIcon: {
      fontIcon: "add",
    },
  };
  register: FormGroup;
  hide = true;
  agree = false;
  customForm: FormGroup;

  constructor(private fb: FormBuilder,
              private services: CountriesService,
              private serverApi: ServerApiService
  ) {
    this.register = this.fb.group({
      name: ["", [Validators.required]],
      slug: ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
  }

  onRegister() {
    console.log("Form Value", this.register.value);
  }

  someFunc2(): void {
    this.barButtonOptions.active = true;
    this.barButtonOptions.text = "جاري حفظ البيانات ...";
    setTimeout(() => {
      this.barButtonOptions.active = false;
      this.barButtonOptions.text = "اضافة";
    }, 3500);
  }

  ngOnInit() {
  }

}
