import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

//Components
import { TopnavComponent } from './topnav.component';



@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    TopnavComponent,
  ],
})
export class TopnavModule { }
