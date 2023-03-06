import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Rol} from "../../../model/enums/Rol";
import {SubRol} from "../../../model/enums/SubRol";
import {Localization} from "../../../model/enums/Localization";
import {RolStatus} from "../../../model/enums/RolStatus";
import {Job} from "../../../model/job";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-job', templateUrl: './create-job.component.html', styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  constructor(private fb: FormBuilder, private translateService: TranslateService,private snack: MatSnackBar) {
    this.form = this.fb.group({
      project: ['', [Validators.required, Validators.maxLength(30)]],
      area: ['', [Validators.required, Validators.maxLength(20)]],
      motive: ['', [Validators.required, Validators.maxLength(250)]],
      vacancies: ['1', [Validators.required, Validators.min(1)]],
      closingDate: ['', []],
      openingDate: [new Date(), [Validators.required]],
      rol: ['', [Validators.required]],
      subRol: ['', [Validators.required]],
      localization: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
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
      closing_date: this.form.get('closingDate')?.value,
      creation_date: this.form.get('openingDate')?.value,
      description: this.form.get('motive')?.value,
      id: 0,
      last_update: new Date(),
      localization: this.form.get('localization')?.value,
      proyect: this.form.get('project')?.value,
      rol: this.form.get('rol')?.value,
      status: this.form.get('status')?.value,
      sub_rol: this.form.get('subRol')?.value,
      vacancies: this.form.get('vacancies')?.value
    }

    if (this.isJobValid(Job)) {
      console.log(Job);
      this.snack.open('Candidato creado correctamente', 'Ok', {duration: 5000});
    }else{
      this.snack.open('Error al crear el candidato', 'Ok', {duration: 5000});
    }
  }

  private isJobValid(job: Job): boolean {
    return job.area !== undefined && job.area !== ''
      && job.closing_date !== undefined && job.creation_date !== undefined
      && job.localization !== undefined && job.proyect !== undefined
      && job.proyect !== '' && job.rol !== undefined && job.status !== undefined
      && job.sub_rol !== undefined && job.vacancies !== undefined && job.vacancies > 0;
  }
}
