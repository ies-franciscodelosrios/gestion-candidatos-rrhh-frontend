import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { JobComponent } from './pages/home/job/job.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthenticationGuard,AuthorizationGuard],
    children: [
      {
        path:'job', component: JobComponent
      },
      {
        path: '',
        redirectTo: '/home/job',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: Error404Component
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
