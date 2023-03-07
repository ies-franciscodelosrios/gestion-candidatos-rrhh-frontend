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
      {path: '', redirectTo: 'newCandidate', pathMatch: 'full'},
      {path: 'main', component: MainComponent,data: { breadcrumb: 'Main'}},
      {path: 'jobs', component: JobsOverviewComponent,data: { breadcrumb: 'Ofert'}},
      {path: 'candidates', component: CandidatesOverviewComponent,data: { breadcrumb: 'Candidates' }},
      {path: 'newJob', component: CreateJobComponent,data: { breadcrumb: 'New Job' }},
      {path: 'newCandidate', component: CreateCandidateComponent,data: { breadcrumb: 'New Candidate' }},
      {path: 'jobs/:id', component: JobComponent,data: { breadcrumb: 'Jobs' }},
      {path: 'candidates/:id', component: CandidateComponent,data: { breadcrumb: 'Candidates' }}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
