import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {first} from "rxjs/operators";
import {CountriesService} from "../countries.service";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.sass']
})
export class AddCountryComponent implements OnInit {
  country: any[];
  constructor(private fb: FormBuilder,
              private service: CountriesService) { }

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
    this.service.create(data).subscribe((data) => {
       console.log(data) ;
      },(error)=>{
      console.log(error);
      }
      )
  }

}
