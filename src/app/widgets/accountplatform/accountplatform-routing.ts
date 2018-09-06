/**
 * Created by mohma on 7/26/2017.
 */

import {NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AccountPlatformWidgetComponent } from './accountplatform.component';

const routes:Routes=[
    {
        path:'',
        component:AccountPlatformWidgetComponent,
        data:{
            title:'data'
        }
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AccountPlatformWidgetRoutingModule{}