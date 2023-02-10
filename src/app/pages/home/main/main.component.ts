import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CandidateService } from 'src/app/services/api/candidate.service';
import { JobService } from 'src/app/services/api/job.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  jobs:number = 0;
  candidates:number = 0;

  constructor(private jobService: JobService, private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getNumberOfJobs();
    this.getNumberOfCandidates();
  }

  public getNumberOfJobs() {
    this.jobService.getAll().subscribe((res) => {
      this.jobs=res.length;
    });
  }
  public async getNumberOfCandidates() {
    this.candidateService.getAll().subscribe((res) => {
      this.candidates=res.length;
    });
  }
  
}
