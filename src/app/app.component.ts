import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular translate';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-FR', 'pt-BR']);
    translate.setDefaultLang('en-US');

    const browserLang = translate.getBrowserLang();
    translate.use('pt-BR');

    console.log('Browser Lang =', browserLang);
    console.log('Navigator Lang =', navigator.language);
    console.log('Current Lang =', translate.currentLang);
  }
}
