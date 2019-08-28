import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { TopnavComponent } from './topnav/topnav.component';


const routes: Routes = [
  { path: '', component: TopnavComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
