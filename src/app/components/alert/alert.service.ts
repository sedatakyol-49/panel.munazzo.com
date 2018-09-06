import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AlertService {

    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private _router: Router) {
        //Clear alert message on route change
        _router.events.subscribe(event => {
            if (this.keepAfterNavigationChange) {
                //Only keep for a single location change
                this.keepAfterNavigationChange = false;
            } else {
                //Clear alert
                this.subject.next();
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message })
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}