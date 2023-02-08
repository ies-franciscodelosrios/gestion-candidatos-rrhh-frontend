import { Component, OnInit } from '@angular/core';
import {CandidateService} from "../../../services/api/candidate.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Candidate} from "../../../model/candidate";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})
export class CreateCandidateComponent implements OnInit {
  constructor(private candidateService:CandidateService, private fb:FormBuilder, private snack:MatSnackBar) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    },{validators:this.checkPasswords});
  }
  public form:FormGroup;
  ngOnInit(): void {
  }

  submit() {
    const candidate:Candidate = {
      name: this.form.get('name')?.value + ' ' + this.form.get('surname')?.value,
      email: this.form.get('email')?.value,
      dni: this.form.get('dni')?.value,
      birthdate: this.form.get('date')?.value,
      password: this.form.get('password')?.value,
      gender: this.form.get('gender')?.value
    };

    if(this.isCandidateValid(candidate)){
      this.resetForm();
      let snackBarRef = this.snack.open('Candidate created successfully', 'Close', {
        duration: 2000
      });
    }else{

    }
  }

  private checkPasswords(control: AbstractControl): ValidationErrors | null{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { notSame: true } : null;
  }

  private isCandidateValid(candidate:Candidate): boolean{
    console.log(candidate);
    return candidate.name !== '' && candidate.email !== '' && candidate.dni !== '' && candidate.birthdate !== null && candidate.password !== '';
  }

  private resetForm(){
    this.form.reset();
  }

}
