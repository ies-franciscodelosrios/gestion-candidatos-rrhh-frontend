import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang()
    if ((lang !== 'es') && (lang !== 'en')) {
      translate.setDefaultLang('en');
    }
  }

  ngOnInit(): void {
  }

}

