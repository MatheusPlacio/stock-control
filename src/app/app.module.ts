import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { CardModule} from "primeng/card"
import { InputTextModule} from "primeng/inputtext"
import { ButtonModule} from "primeng/button"
import { ToastModule} from "primeng/toast"
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // PrimeNG
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],

  providers: [CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
