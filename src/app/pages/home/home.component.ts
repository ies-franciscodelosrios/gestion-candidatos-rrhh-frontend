import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mostrar: Boolean=false;
  mensaje: String="Innovation Group";
  mensaje_enlace:String ="Mostrar";
  constructor(
    public translate: TranslateService,

  ) {
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang()
    if ((lang !== 'es') && (lang !== 'en')) {
      translate.setDefaultLang('en');
    }
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

