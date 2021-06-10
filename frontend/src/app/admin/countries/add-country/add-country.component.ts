import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.sass']
})
export class AddCountryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  register: FormGroup;
  ngOnInit() {
    this.register = this.fb.group({
      // Validators.pattern('[a-zA-Z]+')
      name: ['', [Validators.required]],
      slug: [''],
      status:['']
   //   termcondition: [false, [Validators.requiredTrue]],
    })
  }
  onRegister(){
    let data = this.register.value;
  console.log(data);
  }

}
