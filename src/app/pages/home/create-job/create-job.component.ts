import { Component, OnInit } from '@angular/core';

interface Rol {
  value: string;
  viewValue: string;
}
interface Subrol {
  value: string;
  viewValue: string;
}
interface Localizacion {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})


export class CreateJobComponent implements OnInit{
  
  Roles: Rol[] = [
    {value: 'Desarrollador', viewValue: 'Desarrollador'},
    {value: 'QA', viewValue: 'QA'},
  ];
  Subroles: Subrol[] = [
    {value: 'BackEnd', viewValue: 'BackEnd'},
    {value: 'FrontEnd', viewValue: 'FrontEnd'},
  ];
  Localizaciones: Localizacion[] = [
    {value: 'Barcelona', viewValue: 'Barcelona'},
    {value: 'Cordoba', viewValue: 'Córdoba'},
    {value: 'Londres', viewValue: 'Londres'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  

}