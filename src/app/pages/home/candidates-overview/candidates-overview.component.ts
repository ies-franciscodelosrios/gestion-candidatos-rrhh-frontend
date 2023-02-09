import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/services/api/candidate.service';



@Component({
  selector: 'app-candidates-overview',
  templateUrl: './candidates-overview.component.html',
  styleUrls: ['./candidates-overview.component.scss']
})
export class CandidatesOverviewComponent implements OnInit {
  candidates: Candidate[] = [];
  displayedColumns: string[] = ['name', 'dni', 'gender', 'birthdate', 'mail'];
  

  constructor(private candidateServ: CandidateService) { }

  ngOnInit(): void {
    this.GetAllCandidates();
  }

  public GetAllCandidates(){
    this.candidateServ.getAll().subscribe(candidates => {
      this.candidates = candidates;
      console.log(this.candidates);
    });
  }
  public formatBirthdate(birthdate: string) {
    return new Date(birthdate).toLocaleDateString();
  }

}
