//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopnavModule } from './topnav/topnav.module'; 
import { HomeModule } from './home/home.module';
import { ServicesmainModule } from './servicesmain/servicesmain.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ReactiveFormsModule } from '@angular/forms';



//Components
import { AppComponent } from './app.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { AboutComponent } from './about/about.component';



//Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Services
import { AppointmentService } from './shared/appointment.service';






@NgModule({
  declarations: [
    AppComponent,
    ClinicsComponent,
    AboutComponent,
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
    BrowserAnimationsModule,
    AppointmentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
