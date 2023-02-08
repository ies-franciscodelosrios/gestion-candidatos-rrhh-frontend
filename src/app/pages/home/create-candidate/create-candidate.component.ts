import { Component, OnInit } from '@angular/core';
import {CandidateService} from "../../../services/api/candidate.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})
export class CreateCandidateComponent implements OnInit {
  constructor(private candidateService:CandidateService, private fb:FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      surname: [''],
      email: ['',[Validators.required, Validators.email]],
      dni: [''],
      date: ['']
    });
  }
  public form:FormGroup;
  ngOnInit(): void {
  }

  submit() {

  }
}
