import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpModule} from "@angular/http";
import { CommonModule } from '@angular/common';
import { Services } from '../core/commonservices/services';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { AlertComponent } from '../components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [ LoginComponent,CalendarComponent, AlertComponent],
  providers: [ LoginService,Services ]
})
export class LoginModule { }
