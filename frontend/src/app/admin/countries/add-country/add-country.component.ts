import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {first} from "rxjs/operators";
import {CountriesService} from "../countries.service";
import {MatProgressButtonOptions} from "mat-progress-buttons";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.sass']
})
export class AddCountryComponent implements OnInit {
  country: any[];

  constructor(private fb: FormBuilder,
              private service: CountriesService) {
  }

  register: FormGroup;
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

  ngOnInit() {
    this.register = this.fb.group({
      // Validators.pattern('[a-zA-Z]+')
      name: ['', [Validators.required]],
      slug: [''],
      status: ['']
      //   termcondition: [false, [Validators.requiredTrue]],
    })
  }

  someFunc2(): void {
    this.barButtonOptions.active = true;
    this.onRegister();
    this.barButtonOptions.text = "جاري حفظ البيانات .....";
    setTimeout(() => {
      this.barButtonOptions.active = false;
      this.barButtonOptions.text = "اضافة";
    }, 3500);
  }

  onRegister() {
    let data = this.register.value;
    this.service.create(data).toPromise().then((data) => {
        console.log(data);
      }
    ).catch(error => {
      console.log(error);
    });
  }

}
