import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CountriesService} from "../countries.service";
import {DynamicFormComponent} from "../../../shared/dynamic-form/containers/dynamic-form/dynamic-form.component";
import {SnotifyService} from "ng-snotify";
import {FieldConfig} from "../../../shared/dynamic-form/containers/models/field-config.interface";
import {Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements AfterViewInit {

  @ViewChild(DynamicFormComponent, {static: false}) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'الكنيسة',
      name: 'name',
      placeholder: 'الكنيسة',
      validation: [Validators.required, Validators.minLength(5)]
    },
    {
      type: 'text',
      label: 'العنوان',
      name: 'address',
      placeholder: 'العنوان'
    },
    {
      label: 'إضافه',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor(
    private services: CountriesService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private notify: SnotifyService
  ) {
  }

  ngAfterViewInit(): void {
    //-- Live validate
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
    this.form.setDisabled('submit', true);
    this.cdr.detectChanges();

  }

  submit(value: { [name: string]: any }) {
    this.services.create(value).toPromise().then(data => {
      this.notify.success("تم اضافة البيانات بنجاح ", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true
      });
      this.router.navigate(['/countries/allCountries']);

    }).catch(err => {
      this.notify.error(err , {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true
      });

    });
  }

}
