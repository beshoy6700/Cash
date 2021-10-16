import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.currentUserValue) {
      const userRole = this.authService.currentUserValue.role;
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        alert("ليس لديك صلاحية الدخول");
        this.router.navigate(["/"]);
        return false;
      }
      return true;
    }
  //    this.router.navigate(["/authentication/signin"]);
    this.router.navigate(["/"]);
    return false;
  }
}
