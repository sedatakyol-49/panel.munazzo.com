import { Injectable, Inject, DoCheck } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Platform } from '../data/Platform';
import { Plugin } from '../data/Plugin';
import { AccountPlatform } from '../data/AccountPlatform';
import { FilterCondition } from '../data/FilterCondition';
import { FilterType } from '../data/FilterType';
import { Account } from '../data/Acount';

@Injectable({
    providedIn: 'root'
})

export class Services implements DoCheck {

    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('baseUrl') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    ngDoCheck() {
        this.getAllAccountPlatform();
        this.getAllPlatform();
        this.getAllPlugin();
        this.getFilterCondition();
        this.getFilterType();
    }

    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            'X-MKC-Auth': 'test',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
    );

        //get all accountplatform
        getAllAccount(): Observable<Account[]> {
            let url: string = this.myAppUrl + "account/getall";
           // let localUrl="http://localhost:51462/account/getall";
            let header=new Headers();
            header.append('Content-Type', 'application/json');
            var requestOptions = new RequestOptions({ headers: header });
            return this._http.get(url, requestOptions)
                .map(res => res.json())
                .map(res => {
                    if (res) {
                    }
                    return res;
                })
                .catch(this.errorHandler);
        }

    //get all accountplatform
    getAllAccountPlatform(): Observable<AccountPlatform[]> {
        let url: string = this.myAppUrl + "accountplatform/getall";
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
    //get all platform
    getAllPlatform(): Observable<Platform[]> {
        let url: string = this.myAppUrl + "platform/getall";
        return this._http.get(url)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //get all plugin
    getAllPlugin(): Observable<Plugin[]> {
        let url: string = this.myAppUrl + "plugin/getall";
        return this._http.get(url)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    getFilterCondition():Observable<FilterCondition[]>{
        let url: string = this.myAppUrl + "enumeration/filtercondition";
        return this._http.get(url)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    getFilterType():Observable<FilterType[]>{
        let url: string = this.myAppUrl + "enumeration/filtertype";
        return this._http.get(url)
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