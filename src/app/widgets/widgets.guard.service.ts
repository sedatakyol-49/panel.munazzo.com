import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class WidgetGuardService implements CanActivate{
    
    constructor(){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if("1"==localStorage.getItem("accountID")){
            alert("You dont have this permission !");
            return false;
        }else {
            return true;
        }
    }

}