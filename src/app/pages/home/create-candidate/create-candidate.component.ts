import {Component, OnDestroy, OnInit} from '@angular/core';
import {CandidateService} from "../../../services/api/candidate.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Candidate} from "../../../model/candidate";
import {MatSnackBar} from "@angular/material/snack-bar";
import {firstValueFrom, Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})

export class CreateCandidateComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private candidateService: CandidateService, private fb: FormBuilder, private snack: MatSnackBar,
              private translateService:TranslateService){
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(30)]],
      surname: ['', [Validators.required]],
      description: ['', [Validators.required]],
      rejection_reason: ['', [Validators.required]],
      cv_date: ['', [Validators.required]],
      interview_date: ['', [Validators.required]],
      technical_test_date: ['', [Validators.required]],
      hiring_date: ['', [Validators.required]],
      first_contact_date: ['', [Validators.required]]
    });
  }

  public form: FormGroup;

  ngOnInit(): void {
  }


   submit() {
    
    const candidate: Candidate = {
      name: this.form.get('name')?.value,
      surname:this.form.get('surname')?.value,
      description: this.form.get('description')?.value,
      rejection_reason: this.form.get('reasonForRejection')?.value,
      technical_test_url: this.form.get('technical_test_url')?.value,
      cv_date: this.form.get('cv_date')?.value,
      interview_date: this.form.get('interview_date')?.value,
      technical_test_date: this.form.get('technical_test_date')?.value,
      hiring_date: this.form.get('hiring_date')?.value,
      first_contact_date: this.form.get('first_contact_date')?.value

    };


    if (this.isCandidateValid(candidate)) {
      console.log(candidate)
      this.snack.open('Candidato creado correctamente', 'Ok', {duration: 5000});
     // this.resetForm();
     /* firstValueFrom(this.candidateService.insert(candidate)).then(response => {
          if (response) {
            this.snack.open('Candidato creado correctamente', 'Ok', {duration: 5000});
          } else {
            this.snack.open('Error al crear el candidato', 'Ok', {duration: 5000});
          }
      })
        .catch(async error => {
          this.snack.open(await firstValueFrom(this.translateService.get("Error en la peticion")), 'Ok', {duration: 5000});
        })*/
    } else {
      this.snack.open('Error al crear el candidato', 'Ok', {duration: 5000});
    }
  }
  
/*
  private checkPasswords(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? {notSame: true} : null;
  }
*/

  private isCandidateValid(candidate: Candidate): boolean {
    console.log(candidate);
    return candidate.name !== '' /*&& candidate.mail !== '' && candidate.dni !== '' && candidate.birthdate !== null && candidate.password !== ''*/;
  }

  private resetForm() {
    this.form.reset();
  }
}
