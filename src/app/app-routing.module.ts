import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';

import { AdminPageComponent } from './admin-page/admin-page.component';

import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { LoginSecuritiesPageComponent } from './login-securities-page/login-securities-page.component';



const routes: Routes = [
  {path: 'change-password',component:ChangePasswordPageComponent},
  {path: '', component:LoginPageComponent},
  {path:'admin-page', component:AdminPageComponent}

  {path : 'resetpassword' , component : ResetPasswordPageComponent},
  {path: 'loginsettings' , component : LoginSecuritiesPageComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
