import { Component, OnInit } from '@angular/core';
import {CandidateService} from "../../../services/api/candidate.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})
export class CreateCandidateComponent implements OnInit {
  constructor(private candidateService:CandidateService, private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
    },{validators:this.checkPasswords});
  }
  public form:FormGroup;
  ngOnInit(): void {
  }

  submit() {

  }

  checkPasswords(control: AbstractControl): ValidationErrors | null{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { notSame: true } : null;
  }
}
