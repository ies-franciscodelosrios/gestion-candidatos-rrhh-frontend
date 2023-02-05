import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  title = 'Ventanas';
  editMode=false;
  text='Descripcion de la ventana';
  searchTerm='';
  constructor() { }

  ngOnInit(): void {
  }
  public search(){
    console.log(this.searchTerm);
  }
}
