import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {Ng2ListViewCRUD} from "ng2-listview-crud";
import {CommonModule} from "@angular/common";
import { Ng2Timeline } from 'ng2-timeline'
import {Ng2NewsList} from "../../components/ng2-newslist/ng2newslist.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { AccountPlatformWidgetComponent } from '../accountplatform/accountplatform.component';
import { AccountPlatformWidgetRoutingModule } from '../accountplatform/accountplatform-routing';
import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,         
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule   
} from '@angular/material';


@NgModule({
 imports:[
  FormsModule,ReactiveFormsModule,
  AccountPlatformWidgetRoutingModule,
  CommonModule,Ng2SmartTableModule,
  Ng2ListViewCRUD,
  Ng2Timeline,Ng2NewsList,
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,          
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule
 ],
 declarations:[AccountPlatformWidgetComponent],
 providers:[]
})
export class AccountPlatformWidgetModule{}