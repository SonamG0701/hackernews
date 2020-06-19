import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsbulletinComponent} from './newsbulletin/newsbulletin.component';

const routes: Routes = [
  {path:'', redirectTo: '/topstories', pathMatch: 'full' },
  {path:'topstories', component:NewsbulletinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
