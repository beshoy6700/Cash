import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../models/user";
import {environment} from "src/environments/environment";
import {TokenService} from "./token.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
              private token: TokenService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

//authenticate
  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/admin/login`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.token.setUser('currentUser', user);
          this.token.handle(user.token);
          this.currentUserSubject.next(user);
       //   this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    this.token.removeUser('currentUser');
    this.token.removeToken();
    this.currentUserSubject.next(null);
   // this.router.navigate(["/authentication/signin"]);
    return of({success: false});
  }
}
