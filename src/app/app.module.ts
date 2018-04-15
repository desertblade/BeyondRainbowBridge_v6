import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from "./navbar/navbar.component";
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
