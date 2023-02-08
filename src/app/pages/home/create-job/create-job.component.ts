import { Component, OnInit } from '@angular/core';

interface Office {
  value: string;
  viewValue: string;
}
interface Project {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Candidate:1',symbol: 'H'},
  {name: 'Candidate:2',symbol: 'He'},
  {name: 'Candidate:3',symbol: 'Li'},
  {name: 'Candidate:4',symbol: 'Be'},
  {name: 'Candidate:5',symbol: 'B'},
  {name: 'Candidate:6',symbol: 'C'},
  {name: 'Candidate:7', symbol: 'N'},
  {name: 'Candidate:8', symbol: 'O'},
  {name: 'Candidate:9', symbol: 'F'},
  {name: 'Candidate:10',  symbol: 'Ne'},
];
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit{
  checked = false;


  displayedColumns = ['name','symbol'];
  dataSource = ELEMENT_DATA;

  offices: Office[] = [
    {value: 'londres-0', viewValue: 'Londres'},
    {value: 'cordoba-1', viewValue: 'Cordoba'},
  ];
  projects: Project[] = [
    {value: 'project-0', viewValue: 'Project1'},
    {value: 'project-1', viewValue: 'Project2'},
    {value: 'project-2', viewValue: 'Project3'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}