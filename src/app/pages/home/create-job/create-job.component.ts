import {Component, OnInit} from "@angular/core";
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

@Component({
  selector: 'app-create-job', templateUrl: './create-job.component.html', styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  constructor(private fb: FormBuilder, private translateService: TranslateService,private snack: MatSnackBar,
              public stateS: StateService, private jobs: JobService) {
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

  buttonMessageValues: string[] = ['Guardar', 'Editar'];
  buttonMessage: string = this.buttonMessageValues[0];
  rolValues: Rol[] = Object.values(Rol);
  form: FormGroup;
  subRolValues: SubRol[] = Object.values(SubRol);
  localizationValues: Localization[] = Object.values(Localization);
  statusValues: RolStatus[] = Object.values(RolStatus);

  ngOnInit(): void {
  }

  submit() {
    const Job: Job = {
      area: this.form.get('area')?.value,
      candidates: [],
      closeDate: new Date(this.form.get('closingDate')?.value.toLocaleDateString()),
      creationDate: new Date(this.form.get('openingDate')?.value.toLocaleDateString()),
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

    console.log(Job)
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

  }
}
