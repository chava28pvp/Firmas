import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { FirmasModule } from './firmas/firmas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule, BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, FirmasModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
