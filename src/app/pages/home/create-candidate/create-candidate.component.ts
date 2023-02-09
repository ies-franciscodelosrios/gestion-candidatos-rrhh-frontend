import {Component, OnDestroy, OnInit} from '@angular/core';
import {CandidateService} from "../../../services/api/candidate.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Candidate} from "../../../model/candidate";
import {MatSnackBar} from "@angular/material/snack-bar";
import {firstValueFrom, Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})

export class CreateCandidateComponent implements OnInit {
  constructor(private candidateService: CandidateService, private fb: FormBuilder, private snack: MatSnackBar,
              private translateService:TranslateService){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    }, {validators: this.checkPasswords});
  }

  public form: FormGroup;

  ngOnInit(): void {
  }


   submit() {
    const candidate: Candidate = {
      name: this.form.get('name')?.value + ' ' + this.form.get('surname')?.value,
      mail: this.form.get('email')?.value,
      dni: this.form.get('dni')?.value,
      birthdate: this.form.get('date')?.value,
      password: this.form.get('password')?.value,
      gender: this.form.get('gender')?.value
    };

    if (this.isCandidateValid(candidate)) {
      //this.resetForm();
      firstValueFrom(this.candidateService.insert(candidate)).then(response => {
          if (response) {
            this.snack.open('Candidato creado correctamente', 'Ok', {duration: 5000});
          } else {
            this.snack.open('Error al crear el candidato', 'Ok', {duration: 5000});
          }
      })
        .catch(async error => {
          this.snack.open(await firstValueFrom(this.translateService.get("Error en la peticion")), 'Ok', {duration: 5000});
        })
    } else {

    }
  }

  private checkPasswords(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? {notSame: true} : null;
  }

  private isCandidateValid(candidate: Candidate): boolean {
    console.log(candidate);
    return candidate.name !== '' && candidate.mail !== '' && candidate.dni !== '' && candidate.birthdate !== null && candidate.password !== '';
  }

  private resetForm() {
    this.form.reset();
  }

}
