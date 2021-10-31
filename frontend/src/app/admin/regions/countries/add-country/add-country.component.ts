import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatProgressButtonOptions} from "mat-progress-buttons";
import {CountriesService} from "../countries.service";
import {ServerApiService} from "../../../../core/service/server-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import { NotifierService } from 'angular-notifier';

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
  errors: any[];
  private readonly notifier: NotifierService;
  constructor(private fb: FormBuilder,
              private services: CountriesService,
              private serverApi: ServerApiService,
              private snackBar: MatSnackBar,
              private notifierService: NotifierService
  ) {
    this.register = this.fb.group({
      name: ["", [Validators.required]],
      slug: ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
    this.notifier = notifierService;
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  OnSubmit(): void {
    this.barButtonOptions.active = true;
    this.barButtonOptions.text = "جاري حفظ البيانات ...";
    this.services.create(this.register.value).subscribe(data=>{
      setTimeout(() => {
        this.barButtonOptions.active = false;
        this.barButtonOptions.text = "اضافة";
        this.notifier.notify('success', ' تم اضافة البيانات بنجاح ');

       // this.openSnackBar('', 'Dance');
      }, 3500);
    },error => {
    this.errors = error.errors;
    console.log(this.errors);
    setTimeout(() => {
      this.barButtonOptions.active = false;
      this.barButtonOptions.text = "اضافة";
      this.notifier.notify('error', ' حدث خطأ برجاء اعادة المحاولة مره اخري ');
      //this.openSnackBar(' حدث خطأ برجاء اعادة المحاولة مره اخري', 'اخفاء');
    }, 3500);
    });
  }

  ngOnInit() {
  }

}
