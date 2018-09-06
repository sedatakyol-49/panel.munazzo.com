import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, CommonModule, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent } from './layout/full-layout.component';
import { Ng2AutoBreadCrumb } from "ng2-auto-breadcrumb";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HeaderComponent } from './header/header.component';
import { LegacydashboardComponent } from './legacydashboard/legacydashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './legacywidgets/assortiment/search/search.component';
import { CategorienComponent } from './legacywidgets/assortiment/categorien/categorien.component';
import { PakettenComponent } from './legacywidgets/assortiment/paketten/paketten.component';
import { AppsComponent } from './legacywidgets/assortiment/apps/apps.component';
import { PolicyComponent } from './legacywidgets/munazzo-com/policy/policy.component';
import { ContactComponent } from './legacywidgets/contact/contact.component';
import { OverOnsComponent } from './legacywidgets/over-ons/over-ons.component';
import { MywebstoreComponent } from './legacywidgets/mywebstore/mywebstore.component';
import { CcvComponent } from './legacywidgets/ccv/ccv.component';
import { LightspeedComponent } from './legacywidgets/lightspeed/lightspeed.component';
import { MarketplaceComponent } from './legacywidgets/marketplace/marketplace.component';
import { GenerallComponent } from './legacywidgets/munazzo-com/generall-conditions/generall.component';
import { ConditionsComponent } from './legacywidgets/munazzo-com/dropshipping-conditions/conditions.component';
import { WidgetGuardService } from './widgets/widgets.guard.service';
import { AlertService } from './components/alert/alert.service';


@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, CommonModule, Ng2AutoBreadCrumb, BootstrapModalModule, BrowserAnimationsModule,
    BrowserModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatCardModule, MatCheckboxModule
  ],
  declarations: [
    FullLayoutComponent,
    AppComponent,
    HeaderComponent,
    LegacydashboardComponent,
    FooterComponent,
    SearchComponent,
    CategorienComponent,
    PakettenComponent,
    AppsComponent,
    PolicyComponent,
    GenerallComponent,
    ConditionsComponent,
    ContactComponent,
    OverOnsComponent,
    MywebstoreComponent,
    CcvComponent,
    LightspeedComponent,
    MarketplaceComponent,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  providers: [{
    provide: "baseUrl", useValue: "http://api.munazzo.com/"
  },
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    WidgetGuardService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
