//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopnavModule } from './topnav/topnav.module'; 
import { HomeModule } from './home/home.module';
import { ServicesmainModule } from './servicesmain/servicesmain.module'



//Components
import { AppComponent } from './app.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';


//Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    ClinicsComponent,
    AboutComponent,
    AppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    TopnavModule,
    HomeModule,
    ServicesmainModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
