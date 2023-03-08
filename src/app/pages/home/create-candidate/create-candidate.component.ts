import { Component, OnDestroy, OnInit } from '@angular/core';
import { CandidateService } from "../../../services/api/candidate.service";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Candidate } from "../../../model/candidate";
import { MatSnackBar } from "@angular/material/snack-bar";
import { firstValueFrom, Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { Job } from 'src/app/model/job';
import { Rol } from 'src/app/model/enums/Rol';
import { SubRol } from 'src/app/model/enums/SubRol';
import { Localization } from 'src/app/model/enums/Localization';
import { RolStatus } from 'src/app/model/enums/RolStatus';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


const jobs: Job[] = [
  {
    id: 1,
    proyect: 'Sistema de Gestión de Ventas',
    area: 'Desarrollo de Software',
    rol: Rol.DEVELOPER,
    sub_rol: SubRol.BE,
    localization: Localization.BARCELONA,
    description: 'Desarrollar y mantener el sistema de gestión de ventas de la empresa.',
    status: RolStatus.CLOSED,
    vacancies: 2,
    closing_date: new Date('2023-04-30'),
    creation_date: new Date('2023-03-01'),
    last_update: new Date('2023-03-05')
  },
  {
    id: 2,
    proyect: 'Expansion of our e-commerce platform',
    area: "Software Development",
    rol: Rol.DEVELOPER,
    sub_rol: SubRol.BE,
    localization: Localization.BARCELONA,
    description: "We are seeking a skilled front-end developer with experience in UI/UX design to help us with the expansion of our e-commerce platform.",
    status: RolStatus.CLOSED,
    vacancies: 1,
    closing_date: new Date("2022-07-31"),
    creation_date: new Date("2022-07-01"),
    last_update: new Date("2022-07-15")
  }];

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})

export class CreateCandidateComponent implements OnInit {

  displayedColumns = ['select', 'rol', 'description', 'sub_rol', 'status'];
  //dataSource = jobs;
  dataSource = new MatTableDataSource<Job>(jobs);
  selection = new SelectionModel<Job>(true, []);
  job: Job;
  // selected = this.selection.selected;

  getSelected(): void {
    const selected = this.selection.selected;
    selected.values
    console.log(selected);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor(private candidateService: CandidateService, private fb: FormBuilder, private snack: MatSnackBar,
    private translateService: TranslateService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
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
    if (this.selection.selected.length === 1) {
      const selectedJob = this.selection.selected[0];
      this.job = {
        proyect: selectedJob.proyect,
        area: selectedJob.area,
        rol: selectedJob.rol,
        sub_rol: selectedJob.sub_rol,
        localization: selectedJob.localization,
        description: selectedJob.description,
        status: selectedJob.status,
        vacancies: selectedJob.vacancies,
        closing_date: selectedJob.closing_date,
        creation_date: selectedJob.creation_date,
        last_update: selectedJob.last_update
      };
    }
    const candidate: Candidate = {
      name: this.form.get('name')?.value,
      surname: this.form.get('surname')?.value,
      description: this.form.get('description')?.value,
      rejection_reason: this.form.get('reasonForRejection')?.value,
      technical_test_url: this.form.get('technical_test_url')?.value,
      cv_date: this.form.get('cv_date')?.value,
      interview_date: this.form.get('interview_date')?.value,
      technical_test_date: this.form.get('technical_test_date')?.value,
      hiring_date: this.form.get('hiring_date')?.value,
      first_contact_date: this.form.get('first_contact_date')?.value,
      job: this.job
    };


    if (this.isCandidateValid(candidate)) {
      console.log(candidate)
      this.snack.open('Candidato creado correctamente', 'Ok', { duration: 5000 });
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
      this.snack.open('Error al crear el candidato', 'Ok', { duration: 5000 });
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
