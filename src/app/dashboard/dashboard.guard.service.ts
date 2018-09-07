import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class DashboardGuardService implements CanActivate {
    constructor(private _router: Router) { }
    canActivate() {
        if (localStorage.getItem("isLogged") == "true") {
            return true;
        } else {
            this._router.navigate(["/login"]);
            return false;
        }
    }
}