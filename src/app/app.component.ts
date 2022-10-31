import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { getLeftNavBarConfig, getRightNavBarConfig } from './side-nav/side-nav.config';
import { ISideNavDataInterface } from './side-nav/side-nav.model';
import {LocalizeRouterService} from "@gilsdav/ngx-translate-router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ds-sdc-doc';
  leftNavData: ISideNavDataInterface[];
  rightNavData: ISideNavDataInterface[];

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService
  ) {
    translate.setDefaultLang('en');
    this.leftNavData = getLeftNavBarConfig;
    this.rightNavData = getRightNavBarConfig;
  }

  useLanguage(language: string): void {
    this.localize.changeLanguage(language);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
