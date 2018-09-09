import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class LoginGuardService implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem("isLogged") == "true") {
            this._router.navigate(["/dashboard"]);
            return false;
        } else {
            return true;
        }
    }
}