import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
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
import {PasswordModule} from 'primeng/password'
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
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
    PasswordModule

  ],
  providers: [MessageService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
