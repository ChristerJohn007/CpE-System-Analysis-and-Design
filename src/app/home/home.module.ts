import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



//Components
import { HomeComponent } from './home.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { CarouselComponent } from '../carousel/carousel.component'



@NgModule({
  declarations: [
    HomeComponent,
    TopnavComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
