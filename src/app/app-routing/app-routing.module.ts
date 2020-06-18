import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsbulletinComponent} from '../newsbulletin/newsbulletin.component';

const routes: Routes = [
  {path: 'topStories', component:NewsbulletinComponent},
  { path: '', redirectTo: 'topStories', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
