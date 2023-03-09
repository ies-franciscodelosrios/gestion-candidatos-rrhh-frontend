import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from 'src/app/model/job';
import { JobService } from 'src/app/services/api/job.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobComponent } from '../create-job/create-job.component';
import { Localization } from 'src/app/model/enums/Localization';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-jobs-overview',
  templateUrl: './jobs-overview.component.html',
  styleUrls: ['./jobs-overview.component.scss']
})
export class JobsOverviewComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  offers: Job[] = [];
  Localization = Localization;
  displayedColumns: string[] = ['project', 'area', 'localization', 'creationDate', 'closeDate','Botones'];
  dataSource: MatTableDataSource<Job>;
  constructor(public jobService: JobService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.GetAllOffers();
  }
  abrirPopup(job?:Job) {

    const data = job?{mode:'Edit',job:job}:{mode:'Create'};
    const dialogRef = this.dialog.open(CreateJobComponent,
      {
        data:data,
        width: '80%',
        height: '80%',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Resultado: ${result}`);
      this.GetAllOffers();
    });
  }
  Refresh(){
    this.GetAllOffers();
  }


  public GetAllOffers(){
    this.jobService.getAll().subscribe(offer => {
      this.offers = offer;
      console.log(this.offers[0].localization);
      this.dataSource = new MatTableDataSource(this.offers);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteOffer(element:Job){
    console.log(element.id);
    this.jobService.deleteById(element.id).subscribe(offer => {
      this.GetAllOffers();
    });
  }
  public formatBirthdate(date: string) {
    return new Date(date).toLocaleDateString();
  }
  public getEnumValueFromOrder(order:number,myEnum: any): string {
    if(order<0 || order>myEnum.length-1) return "";
    let i=0;
    for(let key in myEnum) {
      if (i==order){
        return myEnum[key]
      }
      i++;
    }
    return myEnum[order];
  }
  showElement(element:Job){
    const data = {mode:'Show',job:element};
    const dialogRef = this.dialog.open(JobComponent,
      {
        data:data,
        width: '80%',
        height: '80%',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Resultado: ${result}`);
      this.GetAllOffers();
    });
  }

}
