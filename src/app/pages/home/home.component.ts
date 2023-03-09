import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job';
import {StateService} from "../../services/state.service";
import { CreateJobComponent } from './create-job/create-job.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mostrar: Boolean=false;
  mensaje: String="Innovation Group";
  mensaje_enlace:String ="Mostrar";
  constructor(public stateS:StateService) {

  }

  ngOnInit(): void {
  }

  mostrarOcultar(){
     if(this.mostrar){
      this.mostrar=false;
      this.mensaje_enlace="Mostrar"
     }else{
      this.mostrar=true;
      this.mensaje_enlace="Ocultar"
     }

  }

  abrirPopup(job?:Job) {

    const data = job?{mode:'Edit',job:job}:{mode:'Create'};
    
  }
}

