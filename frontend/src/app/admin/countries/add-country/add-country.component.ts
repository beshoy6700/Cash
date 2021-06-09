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
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
   //   termcondition: [false, [Validators.requiredTrue]],
    })
  }
  onRegister(){
    let first = this.register.get('first').value;
  console.log(first);
  }

}
