import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Account } from '../core/data/Acount';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string = "";
  private loggedIn = false;

  constructor(
    private _http: Http, @Inject('baseUrl') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'X-MKC-Auth': 'test'
    }
<<<<<<< HEAD
    );

   login(account:Account):Observable<boolean>{
    let url:string=this.myAppUrl+"account/login";
   // let localUrl="http://localhost:51462/account/login";
    var requestOptions=new RequestOptions({headers:this.headers});
    return this._http.post(url,account,requestOptions)
    .map(res => res.json())
    .map(res=>{
      if(res){
        localStorage.setItem("isLogged",res);
        this.loggedIn=true;
      }
      return res;
    })
    .catch(this.errorHandler);
=======
  );

  login(account: Account): Observable<boolean> {
    let url: string = this.myAppUrl + "account/login";
    var requestOptions = new RequestOptions({ headers: this.headers });
    return this._http.post(url, account, requestOptions)
      .map(res => res.json())
      .map(res => {
        if (res) {
          localStorage.setItem("isLogged", "true");
          this.loggedIn = true;
        }
        return res;
      })
      .catch(this.errorHandler);
>>>>>>> origin/_LogOut
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }

  //kullanici login mi!!
  isLoggedIn() {
    return this.loggedIn;
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }


}
