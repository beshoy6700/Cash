import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Countries} from "./countries.model";


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly API_URL = `${environment.apiUrl}/admin/countries/list`;
  isTblLoading = true;
  dataChange: BehaviorSubject<Countries[]> = new BehaviorSubject<Countries[]>([]);
// Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {
  }

  get data(): Countries[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  getAllCountries() {
    return this.httpClient.get<Countries[]>(this.API_URL).subscribe((data)=>{
      this.isTblLoading = false;
      this.dataChange.next(data);
      }
    );
  }
  addDoctors(countries: Countries): void {
    this.dialogData = countries;

    /*  this.httpClient.post(this.API_URL, doctors).subscribe(data => {
      this.dialogData = doctors;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
}
