import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Platformsettings } from '../../core/data/PlatformSettings';
import { AccountPlatform } from '../../core/data/AccountPlatform';
import { ReturnStatement } from '@angular/compiler';
import { List } from 'lodash';

@Injectable({
    providedIn: 'root'
})

export class PlatformsettingsService {
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test',
        }
    );
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('baseUrl') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    //get all platformsettings
    getAllPlatformsettings(AccountPlatformID: number): Observable<any[]> {
        let url: string = this.myAppUrl + "platformsettings/" + AccountPlatformID + "/getall";
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

    //get all default platformsettings
    getPlatformsettingByDefault(accountPlatformID: number): Observable<any> {
        let url: string = this.myAppUrl + "platformsettings/" + accountPlatformID + "/getdefault";
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

    //Create platformsettings
    createPlatformsettings(platformsettings: Platformsettings): Observable<boolean> {
        let url: string = this.myAppUrl + "platformsettings/create";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.post(url, platformsettings, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Update platformsettings
    updatePlatformsettings(platformsettings: Platformsettings): Observable<boolean> {
        let url: string = this.myAppUrl + "platformsettings/update";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.post(url, platformsettings, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Delete platformsettings	
    deletePlatformsettingsById(platformsettings: Platformsettings): Observable<boolean> {
        // let url: string = this.myAppUrl + "platformsettings/"+ AccountPlatformID+"/getdefault";

        let url: string = this.myAppUrl + "platformsettings/" + platformsettings.ID + "/delete";
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

    extractData(res: Response) {
        let body = res.json();
        return body;
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}