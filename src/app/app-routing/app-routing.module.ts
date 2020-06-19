import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsbulletinComponent} from '../newsbulletin/newsbulletin.component';
import {AppComponent} from '../app.component';
import {CommonModule} from '@angular/common'

const routes: Routes = [  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
