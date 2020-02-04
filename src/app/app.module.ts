import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton'
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
