import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CountriesService} from "../countries.service";
import {ExampleDataSource} from "../../doctors/alldoctors/alldoctors.component";
import {DataSource, SelectionModel} from "@angular/cdk/collections";
import {Countries} from "../countries.model";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormDialogComponent} from "../../doctors/alldoctors/dialogs/form-dialog/form-dialog.component";
import {DeleteDialogComponent} from "../../doctors/alldoctors/dialogs/delete/delete.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {Doctors} from "../../doctors/alldoctors/doctors.model";
import {DoctorsService} from "../../doctors/alldoctors/doctors.service";
import {map} from "rxjs/operators";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.sass']
})
export class AllCountriesComponent implements OnInit {
  private readonly API_URL = `${environment.apiUrl}/admin/countries/list`;
  countries: any[];
  rows = [];
  tableStyle = 'bootstrap';
  columns = [
    { name: 'Name' },
    { name: 'Status' },
    { name: 'Slug' }
  ];

  constructor(public httpClient: HttpClient,
              private service: CountriesService) {}

  switchStyle() {
    if (this.tableStyle == 'dark') {
      this.tableStyle = 'bootstrap';
    } else {
      this.tableStyle = 'dark';
    }
  }
  ngOnInit() {
    this.loadData();
  }
// HBGC~-h}qiLB
  loadData() {
   this.service.getAll().subscribe((data) => {
     this.countries = data.countries;
      this.rows = this.countries;
      }
    );
  }
onRemove(country)
{
/*  let index = this.countries.indexOf(country);
  this.countries.splice(index,1);*/
}

}


