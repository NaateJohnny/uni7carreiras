import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { materialize } from 'materialize-css/js/collapsible';

import { AppComponent } from './app.component';
import { VagasComponent } from './vagas.component';


@NgModule({
  imports: [ BrowserModule,FormsModule],
  declarations: [
    AppComponent, VagasComponent ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }