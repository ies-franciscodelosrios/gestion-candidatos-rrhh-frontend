import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";



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
}

