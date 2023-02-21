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
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { MatBadgeModule } from '@angular/material/badge';
import { JobComponent } from './pages/home/job/job.component';
import { GuestComponent } from './pages/guest/guest.component';
import { MainComponent } from './pages/home/main/main.component';
import { JobsOverviewComponent } from './pages/home/jobs-overview/jobs-overview.component';
import { CandidateComponent } from './pages/home/candidate/candidate.component';
import { CandidatesOverviewComponent } from './pages/home/candidates-overview/candidates-overview.component';
import { CreateJobComponent } from './pages/home/create-job/create-job.component';
import { CreateCandidateComponent } from './pages/home/create-candidate/create-candidate.component';
import {SwitchLangComponent} from "./components/switch-lang/switch-lang.component";
import {HomeRoutingModule} from "./pages/home/home-routing.module";
import { MatSelectModule } from '@angular/material/select';
import {CommonModule} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
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
    CreateCandidateComponent,
    SwitchLangComponent
  ],
  imports: [
    MatCheckboxModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
