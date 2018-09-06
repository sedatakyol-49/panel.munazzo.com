import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AccountPlatform } from '../../core/data/AccountPlatform';

@Injectable({
    providedIn: 'root'
})

export class AccountPlatformService {

    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('baseUrl') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test'
        }
    );

    //get all accountplatform
    getAllAccountPlatform(): Observable<AccountPlatform[]> {
        let url: string = this.myAppUrl + "accountplatform/getall";
        console.log(url);
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.get(url, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Create accountplatform
    createAccountPlatform(accounPlatform: AccountPlatform): Observable<boolean> {
        let url: string = this.myAppUrl + "accountplatform/create";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.post(url, accounPlatform, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Update AccountPlatform
    updateAccountPlatform(accounPlatform: AccountPlatform): Observable<boolean> {
        let url: string = this.myAppUrl + "accountplatform/update";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.post(url, accounPlatform, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Delete AccountPlatform	
    deleteAccountPlatformById(accounPlatform: AccountPlatform): Observable<boolean> {
        let url: string = this.myAppUrl + "accountplatform/" + accounPlatform.ID + "/delete";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.delete(url, { headers: this.headers })
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //get all platformsettings
    getDefaultPlatformsettings(AccountPlatformID: number): Observable<string[]> {
        let url: string = this.myAppUrl + "platformsettings/" + AccountPlatformID + "/getdefault";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.get(url, { headers: this.headers })
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    extractData(res: Response) {
        let body = res.json();
        return body;
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}