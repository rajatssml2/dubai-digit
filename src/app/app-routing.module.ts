import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './citizen/login/login.component';
import { RegisterComponent } from './citizen/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeLoginComponent } from './employee/login/login.component';
import { OtpComponent } from './citizen/otp/otp.component';
import { HomeComponent } from './citizen/home/home.component';
import { CitizenLandingComponent } from './citizen/citizen-landing/citizen-landing.component';
import { NewTradeLicenceComponent } from './citizen/trade-licence/new-trade-licence/new-trade-licence.component';
import { SubmitPageComponent } from './common/submit-page/submit-page.component';
import { SearchApplicationComponent } from './common/search-application/search-application.component';
const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'success',
    component: SubmitPageComponent
  },
  {
    path: 'search-application',
    component: SearchApplicationComponent
  },
  {
    path: 'citizen/login',
    component: LoginComponent
  },
  {
    path: 'citizen/otp',
    component: OtpComponent
  },
  {
    path: 'citizen/register',
    component: RegisterComponent
  },
  {
    path: 'employee/login',
    component: EmployeeLoginComponent
  },
  {
    path: 'citizen',
    component: CitizenLandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'new-trade-licence',
        component: NewTradeLicenceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
