import { Component, HostListener, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SideNavConfig } from './side-nav/side-nav.config';
import { ISideNavDataInterface } from './side-nav/side-nav.model';
import {LocalizeNgModuleFactory, LocalizeRouterService} from "@gilsdav/ngx-translate-router";
import { DisplayLanguages, Languages } from './share/global-params';

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
    translate.setDefaultLang(Languages.English);
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
      this.toggleLanguage(this.getCurrentLang());
    }
    else {
      this.mobile = false;
      this.toggleLanguage(this.getCurrentLang());
    }
  }

  toggleLanguage(language : string) : void {
    if (this.mobile) {
      language === Languages.English ? this.language = DisplayLanguages.FR : this.language = DisplayLanguages.EN;
    }
    else {
      language === Languages.English ? this.language = DisplayLanguages.French : this.language = DisplayLanguages.English;
    }
  }

  useLanguage(): void {
    let language = this.getCurrentLang();
    language === Languages.English || language === DisplayLanguages.English ? language = Languages.French : language = Languages.English;
    this.localize.changeLanguage(language);
    
  }

  getCurrentLang(): string {
    let currentLanguage = this.translate.currentLang;
    this.toggleLanguage(currentLanguage);
    return currentLanguage;
  }
}
