import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modules
import { TopnavModule } from '../topnav/topnav.module'

//Components
import { HomeComponent } from './home.component';
import { CarouselComponent } from '../carousel/carousel.component'




@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TopnavModule
  ]
})
export class HomeModule { }
