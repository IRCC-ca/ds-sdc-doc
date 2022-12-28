import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { SideNavConfig } from './side-nav/side-nav.config';
import { ISideNavDataInterface } from './side-nav/side-nav.model';
import { DisplayLanguages, Languages } from './share/global-params';
// @ts-ignore
import en from '../assets/locales/en.json';
// @ts-ignore
import fr from '../assets/locales/fr.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ds-sdc-doc';
  leftNavData: ISideNavDataInterface[];
  language = this.getCurrentLang();
  mobile = false;
  navStatus = 'nav-oepn';
  public innerWidth: any; // Width of viewport window

  constructor(
    private translate: TranslateService,
    private router: Router,
    private navBarConfig : SideNavConfig
  ) {
    translate.setDefaultLang(Languages.English);
    translate.setTranslation(Languages.English, en);
    translate.setTranslation(Languages.French, fr);
    this.leftNavData = navBarConfig.getLeftNavBarConfig(this.translate);

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

  ngOnInit() {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 992 ) {
      this.mobile = true;
      this.navStatus = 'nav-closed';
      this.toggleLanguage(this.getCurrentLang());
    }
    else {
      this.mobile = false;
      this.navStatus = 'nav-open';
      this.toggleLanguage(this.getCurrentLang());
    }
  }

  toggleLanguage(language : string) : void {
    if (this.mobile) {
      language === Languages.English ? this.language = DisplayLanguages.FR : this.language = DisplayLanguages.EN;
    } else {
      language === Languages.English ? this.language = DisplayLanguages.French : this.language = DisplayLanguages.English;
    }
  }

  getCurrentLang(): string {
    let currentLanguage = this.translate.currentLang;
    this.toggleLanguage(currentLanguage);
    return currentLanguage;
  }
}
