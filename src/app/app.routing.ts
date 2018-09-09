import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from "./layout/full-layout.component";
import { HeaderComponent } from './header/header.component';
import { LegacydashboardComponent } from './legacydashboard/legacydashboard.component';
import { MarketplaceComponent } from './legacywidgets/marketplace/marketplace.component';
import { LightspeedComponent } from './legacywidgets/lightspeed/lightspeed.component';
import { ContactComponent } from './legacywidgets/contact/contact.component';
import { CcvComponent } from './legacywidgets/ccv/ccv.component';
import { MywebstoreComponent } from './legacywidgets/mywebstore/mywebstore.component';
import { OverOnsComponent } from './legacywidgets/over-ons/over-ons.component';
import { ConditionsComponent } from './legacywidgets/munazzo-com/dropshipping-conditions/conditions.component';
import { GenerallComponent } from './legacywidgets/munazzo-com/generall-conditions/generall.component';
import { PolicyComponent } from './legacywidgets/munazzo-com/policy/policy.component';
import { AppsComponent } from './legacywidgets/assortiment/apps/apps.component';
import { CategorienComponent } from './legacywidgets/assortiment/categorien/categorien.component';
import { PakettenComponent } from './legacywidgets/assortiment/paketten/paketten.component';
import { SearchComponent } from './legacywidgets/assortiment/search/search.component';
import { WidgetGuardService } from './widgets/widgets.guard.service';
import { LoginGuardService } from './login/login.guard.service';
import { DashboardGuardService } from './dashboard/dashboard.guard.service';

// Layouts
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'legacydashboard',
    pathMatch: 'full',
  },
  {
    path: 'apps', component: AppsComponent
  },
  {
    path: 'categorien', component: CategorienComponent
  },
  { path: 'paketten', component: PakettenComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'legacydashboard',
    component: LegacydashboardComponent
  },
  {
    path: 'marketplace', component: MarketplaceComponent
  },
  {
    path: 'lightspeed', component: LightspeedComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'ccv', component: CcvComponent
  },
  {
    path: 'mywebstore', component: MywebstoreComponent
  },
  {
    path: 'over-ons', component: OverOnsComponent
  },
  {
    path: 'ccv', component: CcvComponent
  },
  {
    path: 'dropshipping-conditions', component: ConditionsComponent
  },
  {
    path: 'generall-conditions', component: GenerallComponent
  },
  {
    path: 'policy', component: PolicyComponent
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate:[LoginGuardService]
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate:[DashboardGuardService],
        data: {
          title2: "Dashboard"
        }
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'widget',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'widget/main'
          },
          {
            path: 'main',
            loadChildren: './widgets/main/main.module#MainWidgetModule'
          },
          {
            path: 'table',
            loadChildren: './widgets/tables/tables.module#TablesWidgetModule'
          },
          {
            path: 'chart',
            loadChildren: './widgets/charts/charts.module#ChartsWidgetModule'
          },
          {
            path: 'accountplatform',
            canActivate: [WidgetGuardService],
            loadChildren: './widgets/modules/accountplatform.module#AccountPlatformWidgetModule'
          },
          {
            path: 'platformsettings',
            loadChildren: './widgets/modules/platformsettings.module#PlatformsettingsWidgetModule'
          }
        ]
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
