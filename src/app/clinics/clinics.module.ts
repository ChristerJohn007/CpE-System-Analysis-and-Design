import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { ClinicsComponent } from './clinics.component';




@NgModule({
  declarations: [
    ClinicsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClinicsModule { }
