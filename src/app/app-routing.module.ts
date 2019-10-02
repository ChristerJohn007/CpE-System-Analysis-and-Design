import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components

import { TopnavComponent } from './topnav/topnav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
