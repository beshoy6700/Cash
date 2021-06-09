import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Countries} from "./countries.model";


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly API_URL = `${environment.apiUrl}/admin/countries/`;

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<any>(this.API_URL + 'list');
    // return this.httpClient.get<Countries[]>(this.API_URL);
  }

  create(country) {
    return this.httpClient.post(this.API_URL+'create', country);
  }
}
