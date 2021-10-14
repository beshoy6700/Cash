import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatProgressButtonOptions} from "mat-progress-buttons";
import {CountriesService} from "../countries.service";
import {ServerApiService} from "../../../../core/service/server-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
              private serverApi: ServerApiService,
              private snackBar: MatSnackBar
  ) {
    this.register = this.fb.group({
      name: ["", [Validators.required]],
      slug: ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
  }

  onRegister() {
    this.services.create(this.register.value).subscribe(data=>{
      console.log(data);
    },error => {
      console.log(error);
    });
  //  console.log("Form Value", this.register.value);

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  someFunc2(): void {
    this.barButtonOptions.active = true;
    this.barButtonOptions.text = "جاري حفظ البيانات ...";
    this.services.create(this.register.value);
    setTimeout(() => {
      this.barButtonOptions.active = false;
      this.barButtonOptions.text = "اضافة";
      this.openSnackBar('تم اضافة البيانات بنجاح', 'Dance');
    }, 3500);
  }

  ngOnInit() {
  }

}
