import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates-overview',
  templateUrl: './candidates-overview.component.html',
  styleUrls: ['./candidates-overview.component.scss']
})
export class CandidatesOverviewComponent implements OnInit {

   searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }
  search(){
    
  }

}
