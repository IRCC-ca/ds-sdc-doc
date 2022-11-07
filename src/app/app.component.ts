import { Component, HostListener, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SideNavConfig } from './side-nav/side-nav.config';
import { ISideNavDataInterface } from './side-nav/side-nav.model';
import {LocalizeNgModuleFactory, LocalizeRouterService} from "@gilsdav/ngx-translate-router";

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
  public innerWidth: any;

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService,
    private navBarConfig : SideNavConfig
  ) {
    translate.setDefaultLang('en');
    this.leftNavData = navBarConfig.getLeftNavBarConfig(this.translate);
  }

  ngOnInit() {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 992 ) {
      this.mobile = true;
      this.displayLanguage(this.getCurrentLang())
    }
    else {
      this.mobile = false
      this.displayLanguage(this.getCurrentLang())
    }
  }

  displayLanguage(language : string) : string {
    if (this.mobile) {
      if (language === 'en') {
        return this.language = 'FR';
      } else {
        return this.language = 'EN'
      }
    }
    else {
      if (language === 'en') {
        return this.language = 'Français';
      } else {
        return this.language = 'English'
      }
    }
  }

  useLanguage(): void {
    let language = this.getCurrentLang()
    language === 'en' || language === 'English' ? language = "fr" : language = 'en'
    this.localize.changeLanguage(language);
    
  }

  getCurrentLang(): string {
    let currentLanguage = this.translate.currentLang;
    this.displayLanguage(currentLanguage)
    return currentLanguage;
  }
}
