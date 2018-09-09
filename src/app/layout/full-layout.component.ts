import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls:['./full-layout.component.scss']
})
export class FullLayoutComponent{

  public toggleBarIcon:boolean=true;
  loggedInCustomer=true;
  constructor(private _router:Router){
  }
  logOut(){
    localStorage.removeItem("isLogged");
    localStorage.removeItem("accountID");
    this._router.navigate(["legacydashboard"]);
  }

  


}
