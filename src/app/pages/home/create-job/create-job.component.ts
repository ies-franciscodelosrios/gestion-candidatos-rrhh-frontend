import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

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
export interface Task {
  color: ThemePalette;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Candidate:1', symbol: 'H' },
  { name: 'Candidate:2', symbol: 'He' },
  { name: 'Candidate:3', symbol: 'Li' },
  { name: 'Candidate:4', symbol: 'Be' },
  { name: 'Candidate:5', symbol: 'B' },
  { name: 'Candidate:6', symbol: 'C' },
  { name: 'Candidate:7', symbol: 'N' },
  { name: 'Candidate:8', symbol: 'O' },
  { name: 'Candidate:9', symbol: 'F' },
  { name: 'Candidate:10', symbol: 'Ne' },
];
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  checked = false;

  task: Task = {
    color: 'primary',
  };


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
  displayedColumns = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;

  offices: Office[] = [
    { value: 'londres-0', viewValue: 'Londres' },
    { value: 'cordoba-1', viewValue: 'Cordoba' },
  ];
  projects: Project[] = [
    { value: 'project-0', viewValue: 'Project1' },
    { value: 'project-1', viewValue: 'Project2' },
    { value: 'project-2', viewValue: 'Project3' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  

}