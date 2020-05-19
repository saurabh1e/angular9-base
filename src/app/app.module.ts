import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Interceptor} from "./config/http.intercepter";
import {SharedModule} from "./@shared/shared.module";
import {FormService} from "./@core/services/form.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    FormService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
