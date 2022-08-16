import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderPageComponent } from './common/header-page/header-page.component';
import { FPageComponent } from './common/f-page/f-page.component';
import { SubHeaderComponent } from './common/sub-header/sub-header.component';
import { CarousalComponent } from './common/carousal/carousal.component';
import { LoginComponent } from './citizen/login/login.component';
import { RegisterComponent } from './citizen/register/register.component';
import { EmployeeLoginComponent } from './employee/login/login.component';
import { OtpComponent } from './citizen/otp/otp.component';
import { HomeComponent } from './citizen/home/home.component';
import { CitizenLandingComponent } from './citizen/citizen-landing/citizen-landing.component';
import { NewTradeLicenceComponent } from './citizen/trade-licence/new-trade-licence/new-trade-licence.component';
import { ProgressBarComponent } from './common/progress-bar/progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderPageComponent,
    FPageComponent,
    SubHeaderComponent,
    CarousalComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeLoginComponent,
    OtpComponent,
    HomeComponent,
    CitizenLandingComponent,
    NewTradeLicenceComponent,
    ProgressBarComponent
  ],
  imports: [
   
    BrowserModule,
    
    AppRoutingModule,
    IvyCarouselModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatSelectModule,
    
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
