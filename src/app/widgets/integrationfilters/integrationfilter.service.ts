import { Injectable, Inject } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { IntegrationFilter } from "../../core/data/integrationfilter";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IntegrationFilterService {
    headers = new Headers({
        'Content-Type': 'application/json',
        'X-MKC-Auth': 'test',
    })
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('baseUrl') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }


    //get all integrationfilters
    getAllIntegrationFilters(accountPlatformID: number): Observable<IntegrationFilter[]> {
        let url: string = this.myAppUrl + "integrationfilter/" + accountPlatformID + "/getall";
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

    //get all default integrationfilers
    getIntegrationFiltersByDefault(accountPlatformID: number): Observable<IntegrationFilter[]> {
        let url: string = this.myAppUrl + "integrationfilter/" + accountPlatformID + "/getdefaultkey";
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
    createIntegrationFilters(integrationfilers: IntegrationFilter): Observable<boolean> {
        let url: string = this.myAppUrl + "integrationfilter/create";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.post(url, integrationfilers, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Update IntegrationFilters
    updateIntegrationFilters(integrationfilters: IntegrationFilter): Observable<boolean> {
        let url: string = this.myAppUrl + "integrationfilter/update";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.post(url, integrationfilters, requestOptions)
            .map(res => res.json())
            .map(res => {
                if (res) {
                }
                return res;
            })
            .catch(this.errorHandler);
    }

    //Delete platformsettings	
    deleteIntegrationFiltersById(integrationfilters: IntegrationFilter): Observable<boolean> {
        let url: string = this.myAppUrl + "integrationfilter/" + integrationfilters.ID + "/delete";
        var requestOptions = new RequestOptions({ headers: this.headers });
        return this._http.delete(url, requestOptions)
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