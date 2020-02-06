
import { LoginPageComponent } from './login-page/login-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms'
import { PanelModule } from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {PasswordModule} from 'primeng/password'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { LoginSecuritiesPageComponent } from './login-securities-page/login-securities-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChangePasswordPageComponent,
    ResetPasswordPageComponent,
    LoginSecuritiesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    CardModule,
    FormsModule,
    PanelModule,
    DropdownModule,
    ToastModule,
    BrowserAnimationsModule,
    PasswordModule,
    CheckboxModule


  ],
  providers: [MessageService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
