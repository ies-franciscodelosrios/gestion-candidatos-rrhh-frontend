import { Component, OnInit } from '@angular/core';

interface Office {
  value: string;
  viewValue: string;
}
interface Project {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
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
