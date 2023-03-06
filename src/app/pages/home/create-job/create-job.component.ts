import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Rol} from "../../../model/enums/Rol";
import {SubRol} from "../../../model/enums/SubRol";
import {Localization} from "../../../model/enums/Localization";
import {RolStatus} from "../../../model/enums/RolStatus";

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  constructor(private fb: FormBuilder, private translateService:TranslateService){
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

  }
}
