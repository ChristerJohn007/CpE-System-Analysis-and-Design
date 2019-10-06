import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

//Components
import { TopnavComponent } from './topnav.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  exports: [
    TopnavComponent,
  ],
})
export class TopnavModule { }
