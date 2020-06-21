import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NewsbulletinComponent } from './newsbulletin/newsbulletin.component';
import { UpVoteChartComponent } from './up-vote-chart/up-vote-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsbulletinComponent,
    UpVoteChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
