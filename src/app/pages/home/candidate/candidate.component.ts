import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CandidateService } from 'src/app/services/api/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor(private candidateServ: CandidateService) { }

  ngOnInit(): void {
  }
  public async mostrar(){
  const candidate = this.candidateServ.getById(2);
  const aux = await lastValueFrom(candidate);
  console.log(aux);
  }

}
