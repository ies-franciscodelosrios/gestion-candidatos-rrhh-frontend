import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/services/api/candidate.service';



@Component({
  selector: 'app-candidates-overview',
  templateUrl: './candidates-overview.component.html',
  styleUrls: ['./candidates-overview.component.scss']
})
export class CandidatesOverviewComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  candidates: Candidate[] = [];
  displayedColumns: string[] = ['name', 'dni', 'gender', 'birthdate', 'mail'];
  dataSource: MatTableDataSource<Candidate>;

  

  constructor(private candidateServ: CandidateService) { }

  ngOnInit(): void {
    this.GetAllCandidates();

  }
  public GetAllCandidates(){
    this.candidateServ.getAll().subscribe(candidates => {
      this.candidates = candidates;
      this.dataSource = new MatTableDataSource(this.candidates);
      this.dataSource.paginator = this.paginator;
    });
  }
  public formatBirthdate(birthdate: string) {
    return new Date(birthdate).toLocaleDateString();
  }
}
