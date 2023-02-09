import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job';
import { JobService } from 'src/app/services/api/job.service';

@Component({
  selector: 'app-jobs-overview',
  templateUrl: './jobs-overview.component.html',
  styleUrls: ['./jobs-overview.component.scss']
})
export class JobsOverviewComponent implements OnInit {
  offers: Job[] = [];
  displayedColumns: string[] = ['tittle', 'office', 'project', 'creation_Date', 'close_Date'];
  constructor(public jobService: JobService) { }

  ngOnInit(): void {
    this.GetAllOffers();
  }


  public GetAllOffers(){
    this.jobService.getAll().subscribe(offer => {
      this.offers = offer;
    });
  }
  public formatBirthdate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
