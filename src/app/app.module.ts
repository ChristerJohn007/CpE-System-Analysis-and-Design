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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http'; 



//Components
import { AppComponent } from './app.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { AboutComponent } from './about/about.component';



//Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Services
import { AppointmentService } from './shared/appointment.service';
import { AuthService } from './shared/auth.service';
import { GuardService } from './shared/guard.service';

//Environment
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FooterComponent } from './footer/footer.component';

// import { AppointmentListComponent } from './appointment-list/appointment-list.component';






@NgModule({
  declarations: [
    AppComponent,
    ClinicsComponent,
    AboutComponent,
    FooterComponent,
    // AppointmentListComponent,
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
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [AppointmentService, AuthService, AngularFirestore, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
