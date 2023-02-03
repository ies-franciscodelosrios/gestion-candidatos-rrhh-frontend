import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { MatBadgeModule } from '@angular/material/badge'
import { JobComponent } from './pages/home/job/job.component';
import { GuestComponent } from './pages/guest/guest.component';
import { MainComponent } from './pages/home/main/main.component';
import { JobsOverviewComponent } from './pages/home/jobs-overview/jobs-overview.component';
import { CandidateComponent } from './pages/home/candidate/candidate.component';
import { CandidatesOverviewComponent } from './pages/home/candidates-overview/candidates-overview.component';
import { CreateJobComponent } from './pages/home/create-job/create-job.component';
import { CreateCandidateComponent } from './pages/home/create-candidate/create-candidate.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    HomeComponent,
    JobComponent,
    GuestComponent,
    MainComponent,
    JobsOverviewComponent,
    CandidateComponent,
    CandidatesOverviewComponent,
    CreateJobComponent,
    CreateCandidateComponent
  ],
  imports: [
    MatBadgeModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
