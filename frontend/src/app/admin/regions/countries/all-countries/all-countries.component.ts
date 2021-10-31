import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CountriesService} from "../countries.service";
import {Observable} from "rxjs";
import {Country} from "../Country";


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.sass']
})
export class AllCountriesComponent implements OnInit {
  private readonly API_URL = `${environment.apiUrl}/admin/countries/list`;
private rowHeight;
  countries: Country[];
  rows = [];
  tableStyle = 'bootstrap';
  columns = [
    {name: 'Name'},
    {name: 'Status'},
    {name: 'Slug'}
  ];
  columnDefs = [
    {headerName: 'م', field: 'id', resizable: true, sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'الدولة', field: 'name', resizable: true, sortable: true, filter: true},
    {headerName: 'Slug', field: 'slug', resizable: true, sortable: true, filter: false},
    {headerName: 'الحالة', field: 'status', resizable: true, sortable: true, filter: false}
  ];

  constructor(public httpClient: HttpClient,
              private service: CountriesService) {
  }
  /*rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];*/
  rowData: Observable<any[]>;

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
        this.rowData = data.countries;

        console.log(this.countries);
        //  this.rows = this.countries;
      },(error) =>{
      console.log(error.errors);
      }
    );
  }

  onRemove(country) {
    /*  let index = this.countries.indexOf(country);
      this.countries.splice(index,1);*/
  }

}
