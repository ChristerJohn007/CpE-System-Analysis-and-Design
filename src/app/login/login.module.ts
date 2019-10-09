import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

//Components
import { LoginComponent } from '../login/login.component';





@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class LoginModule { }
