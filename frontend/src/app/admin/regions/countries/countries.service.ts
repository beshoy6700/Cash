import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerApiService} from "../../../core/service/server-api.service";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
// private readonly API_URL = `${environment.apiUrl}/admin/countries/`;

  constructor(private httpClient: HttpClient,
              private serverApiService : ServerApiService) {
  }

  getAll() {
    return this.serverApiService.get<any>('/admin/countries/list');
    // return this.httpClient.get<Countries[]>(this.API_URL);
  }

  create(country) {
    return this.serverApiService.post<any>('/admin/countries/create', country);
  }
}
