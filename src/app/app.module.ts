import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryRzbComponent } from './summary-rzb/summary-rzb.component';
import { SummaryRbbComponent } from './summary-rbb/summary-rbb.component';
import { SummaryIvbComponent } from './summary-ivb/summary-ivb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent,
    SummaryRzbComponent,
    SummaryRbbComponent,
    SummaryIvbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
