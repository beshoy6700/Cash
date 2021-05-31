import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // Local
  private iss = {
    'admin-login': 'http://127.0.0.1:8000/api/v1/admin/login',
    'user-login': 'http://127.0.0.1:8000/api/v1/login'
  };

  constructor() {
  }

  handle(token) {
    this.setToken(token);
    console.log(this.payload(token));
    console.log(this.isValid());
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  setUser(name, user) {
    localStorage.setItem(name, JSON.stringify(user));
  }

  removeUser(user) {
    localStorage.removeItem(user);
  }
}
