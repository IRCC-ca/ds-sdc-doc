import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Languages } from './share/global-params';
// @ts-ignore
import en from '../assets/locales/en.json';
// @ts-ignore
import fr from '../assets/locales/fr.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ds-sdc-doc';
  mobile = false;
  navStatus = 'nav-open';
  public innerWidth: any; // Width of viewport window

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    translate.setDefaultLang(Languages.English);
    translate.setTranslation(Languages.English, en);
    translate.setTranslation(Languages.French, fr);

    // Set initial language
    /**
     * Subscribe to router events because the init cycle for this component happens
     * before the router functionality
     */
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.translate.use(this.router.url.includes('/fr') ? Languages.French : Languages.English);
        //Sets the html language attribute to current language
        document.documentElement.lang = this.translate.currentLang.substring(0,2);
      }
    });
  }
}
