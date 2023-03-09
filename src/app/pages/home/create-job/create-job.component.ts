import {Component, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Rol} from "../../../model/enums/Rol";
import {SubRol} from "../../../model/enums/SubRol";
import {Localization} from "../../../model/enums/Localization";
import {RolStatus} from "../../../model/enums/RolStatus";
import {Job} from "../../../model/job";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StateService} from "../../../services/state.service";
import {JobService} from "../../../services/api/job.service";
import {firstValueFrom} from "rxjs";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-job', templateUrl: './create-job.component.html', styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  constructor(private fb: FormBuilder, private translateService: TranslateService,private snack: MatSnackBar,
              public stateS: StateService, private jobs: JobService,
              @Inject(MAT_DIALOG_DATA) public data: {mode:string,job?:Job}
              ) {

    this.form = this.fb.group({
      project: ['', [Validators.required, Validators.maxLength(30)]],
      area: ['', [Validators.required, Validators.maxLength(20)]],
      motive: ['', [Validators.required, Validators.maxLength(250)]],
      vacancies: ['1', [Validators.required, Validators.min(1)]],
      closingDate: ['', []],  //*   sacarlos y addControl manual según estado.
      openingDate: [new Date(), [Validators.required]],
      rol: ['', [Validators.required]],
      subRol: ['', [Validators.required]],
      localization: ['', [Validators.required]],
      status: ['', [Validators.required]],  //*
    });

    this.stateS.state.subscribe(status=>{
      console.log(status)
    })
  }

  buttonMessage: string = this.data.mode === 'Create' ? 'Create' : 'Edit';
  rolValues: Rol[] = Object.values(Rol);
  form: FormGroup;
  subRolValues: SubRol[] = Object.values(SubRol);
  localizationValues: Localization[] = Object.values(Localization);
  statusValues: RolStatus[] = Object.values(RolStatus);

  ngOnInit(): void {
    if(this.data.job){
      this.form.get('project')?.setValue(this.data.job.project);
      this.form.get('area')?.setValue(this.data.job.area);
      this.form.get('motive')?.setValue(this.data.job.description);
      this.form.get('vacancies')?.setValue(this.data.job.vacancies);
      this.form.get('closingDate')?.setValue(this.data.job.closeDate);
      this.form.get('openingDate')?.setValue(this.data.job.creationDate);
      this.form.get('rol')?.setValue(this.getValueOfEnum(Rol, this.data.job.rol));
      this.form.get('subRol')?.setValue(this.getValueOfEnum(SubRol, this.data.job.subRol));
      this.form.get('localization')?.setValue(this.getValueOfEnum(Localization, this.data.job.localization));
      this.form.get('status')?.setValue(this.getValueOfEnum(RolStatus, this.data.job.status));
    }
  }
  private getValueOfEnum(e : any, value : any): any {
    const indexOfEnum = Object.keys(e).indexOf(value.toString());
    const valueOfEnum = Object.values(e)[indexOfEnum];
    return valueOfEnum;
  }

  submit() {
    console.log(this.data.mode)
    const Job: Job = {
      area: this.form.get('area')?.value,
      candidates: [],
      closeDate: new Date(this.form.get('closingDate')?.value),
      creationDate: new Date(this.form.get('openingDate')?.value),
      description: this.form.get('motive')?.value,
      id: 0,
      last_update: new Date(),
      localization: this.form.get('localization')?.value,
      project: this.form.get('project')?.value,
      rol: this.form.get('rol')?.value,
      status: this.form.get('status')?.value,
      subRol: this.form.get('subRol')?.value,
      vacancies: this.form.get('vacancies')?.value
    }
    if(this.data.mode === 'Create'){
    firstValueFrom(this.jobs.insert(Job)).then(response => {
      if (response) {
        this.snack.open('Oferta creada correctamente', 'Ok', {duration: 5000});
      } else {
        this.snack.open('Error al crear la oferta', 'Ok', {duration: 5000});
      }
    })
      .catch(async error => {
        this.snack.open(await firstValueFrom(this.translateService.get("Error en la peticion")), 'Ok', {duration: 5000});
      })

    }else if(this.data.mode === 'Edit'){
      Job.id = this.data.job?.id || 0;
      firstValueFrom(this.jobs.update(Job)).then(response => {
        if (response) {
          this.snack.open('Oferta editada correctamente', 'Ok', {duration: 5000});
        } else {
          this.snack.open('Error al editar la oferta', 'Ok', {duration: 5000});
        }
      })
        .catch(async error => {
          this.snack.open(await firstValueFrom(this.translateService.get("Error en la peticion")), 'Ok', {duration: 5000});
        })
    }

  }
}
