import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {Ng2ListViewCRUD} from "ng2-listview-crud";
import {CommonModule} from "@angular/common";
import { Ng2Timeline } from 'ng2-timeline'
import {Ng2NewsList} from "../../components/ng2-newslist/ng2newslist.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { PlatformsettingComponent } from '../platformsetting/platformsetting.component';
import { PlatformsettingsWidgetRoutingModule } from '../platformsetting/platformsettings-routing';

@NgModule({
 imports:[
     FormsModule,ReactiveFormsModule,
     PlatformsettingsWidgetRoutingModule,
     CommonModule,Ng2SmartTableModule,
     Ng2ListViewCRUD,
     Ng2Timeline,Ng2NewsList
 ],
 declarations:[PlatformsettingComponent],
 providers:[]
})
export class PlatformsettingsWidgetModule{}