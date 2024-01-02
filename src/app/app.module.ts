import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NextDirective } from './dashboard/next.directive';
import { PrevDirective } from './dashboard/prev.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PlantSpecimensComponent } from './plant-specimens/plant-specimens.component';
import { HumanBiospecimensComponent } from './human-biospecimens/human-biospecimens.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicePageComponent } from './service-page/service-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    NextDirective,
    PrevDirective,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    PlantSpecimensComponent,
    HumanBiospecimensComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
