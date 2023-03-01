import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./home.component";
import {JobsOverviewComponent} from "./jobs-overview/jobs-overview.component";
import {CreateJobComponent} from "./create-job/create-job.component";
import {CreateCandidateComponent} from "./create-candidate/create-candidate.component";
import {JobComponent} from "./job/job.component";
import {CandidateComponent} from "./candidate/candidate.component";
import { CandidatesOverviewComponent } from './candidates-overview/candidates-overview.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainComponent},
      {path: 'jobs', component: JobsOverviewComponent},
      {path: 'candidates', component: CandidatesOverviewComponent},
      {path: 'newJob', component: CreateJobComponent},
      {path: 'newCandidate', component: CreateCandidateComponent,data: { breadcrumb: 'Nuevo Candidatos' }},
      {path: 'jobs/:id', component: JobComponent},
      {path: 'candidates/:id', component: CandidateComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
