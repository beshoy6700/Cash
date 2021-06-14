import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {Observable, throwError} from "rxjs";
import {retry, catchError, map} from "rxjs/operators";
import * as _ from 'underscore';
import {environment} from "../../../environments/environment";
import {LocatorService} from "../../shared/service/locator.service";


@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  private readonly API_URL = `${environment.apiUrl}`;
   readonly API_UPLOAD_URL = 'http://localhost:8000/api/upload';

  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService
  ) {
  }

  private getUrl(url) {
    return this.API_URL + url;
  }

  public get<T>(path, data = Object()): Observable<any> {
    let paramsBuilder: HttpParams = new HttpParams({
      fromObject: data
    });
    this.spinnerService.show();
    return this.http.get(this.getUrl(path), {
      params: paramsBuilder
    }).pipe(
      map((data: any) => {
        this.spinnerService.hide();
        return data;
      }),
      catchError(this.handleError)
    )
  }

  public post<T>(path, data = Object()): Observable<any> {
    this.spinnerService.show();
    return this.http.post(this.getUrl(path), JSON.stringify(data), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      map((data: any) => {
        this.spinnerService.hide();
        return data;
      }),
      catchError(this.handleError)
    )
  }

  public put<T>(path, data = Object()): Observable<any> {
    this.spinnerService.show();
    return this.http.put(this.getUrl(path), JSON.stringify(data), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      map((data: any) => {
        this.spinnerService.hide();
        return data;
      }),
      catchError(this.handleError)
    )
  }


  public delete<T>(path, data = Object()): Observable<any> {
    let paramsBuilder: HttpParams = new HttpParams();
    _.forEach(data, (value, key) => {
      paramsBuilder.append(key, value)
    });

    this.spinnerService.show();
    return this.http.delete(this.getUrl(path), {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: paramsBuilder,
      observe: "body"
    }).pipe(
      map((data: any) => {
        this.spinnerService.hide();
        return data;
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      console.error('Client Side Error: ', error.error.message);
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.error('Server Side Error: ', error);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  private handleErrors(error: any) {
    let spinnerService = LocatorService.injector.get<NgxSpinnerService>(NgxSpinnerService);
    setTimeout(() => {
      spinnerService.hide();
    }, 100);

    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg =
      (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : error;
    console.error(errMsg); // log to console instead

    return throwError(errMsg);
    //  return errMsg;
  }
}
