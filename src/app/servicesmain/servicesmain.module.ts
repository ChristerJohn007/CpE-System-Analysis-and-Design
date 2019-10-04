import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


//Modules
import { TopnavModule } from '../topnav/topnav.module'

//Components
import { ServicesmainComponent } from './servicesmain.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';






@NgModule({
  declarations: [
    ServicesmainComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service5Component,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TopnavModule
  ]
})
export class ServicesmainModule { }
