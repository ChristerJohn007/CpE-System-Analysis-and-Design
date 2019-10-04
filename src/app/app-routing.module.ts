import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components

import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ServicesmainComponent } from './servicesmain/servicesmain.component';
import { Service1Component } from './servicesmain/service1/service1.component';
import { Service2Component } from './servicesmain/service2/service2.component';
import { Service3Component } from './servicesmain/service3/service3.component';
import { Service4Component } from './servicesmain/service4/service4.component';
import { Service5Component } from './servicesmain/service5/service5.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent},
  { path: 'services', component: ServicesmainComponent},
  { path: 'services/GeneralDentistry', component: Service1Component},
  { path: 'services/CosmeticDentistry', component: Service2Component},
  { path: 'services/Prosthodontics', component: Service3Component},
  { path: 'services/Orthodontics', component: Service4Component},
  { path: 'services/Xray', component: Service5Component},
  { path: 'clinics', component: ClinicsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'appointment', component: AppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
