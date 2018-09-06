import { Component, OnInit, OnDestroy } from "@angular/core";
import { AlertService } from "./alert.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {

  message: any;
  private subscription: Subscription;

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this._alertService.getMessage().subscribe(message => {
      this.message = message;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
































/**
 * Created by mohma on 7/29/2017.
 */

// import { Component, Input } from "@angular/core";
// declare let $: any;


// @Component({
//   templateUrl: 'alert.component.html',
//   selector: 'alert',
// })

// export class AlertComponent {
//   @Input('color') color: string = "#d9534f";
//   @Input('fontColor') font: string = "#ececec";
//   @Input('text') text: string = "Alert";
//   public opacity: number = 0;


//   public alertHidden: boolean = true;

//   ngOnInit() {
//     let self = this;
//     setTimeout(function () {
//       self.alertHidden = false;
//       setInterval(function () {
//         self.opacity += 0.1;
//         //if(self.opacity===1.0)
//       }, 70)
//     }, 500);
//   }

//   dismiss() {
//     this.alertHidden = true;
//   }
// }
