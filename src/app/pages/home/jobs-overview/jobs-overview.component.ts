import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from 'src/app/model/job';
import { JobService } from 'src/app/services/api/job.service';

@Component({
  selector: 'app-jobs-overview',
  templateUrl: './jobs-overview.component.html',
  styleUrls: ['./jobs-overview.component.scss']
})
export class JobsOverviewComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  offers: Job[] = [];
  displayedColumns: string[] = ['tittle', 'office', 'project', 'creation_Date', 'close_Date'];
  dataSource: MatTableDataSource<Job>;
  constructor(public jobService: JobService) { }

  ngOnInit(): void {
    this.GetAllOffers();
  }


  public GetAllOffers(){
    this.jobService.getAll().subscribe(offer => {
      this.offers = offer;
      this.dataSource = new MatTableDataSource(this.offers);
      this.dataSource.paginator = this.paginator;
    });
  }
  public formatBirthdate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
