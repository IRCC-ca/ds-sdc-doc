import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SideNavConfig } from './side-nav/side-nav.config';
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

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService,
    private navBarConfig : SideNavConfig
  ) {
    translate.setDefaultLang('en');
    this.leftNavData = navBarConfig.getLeftNavBarConfig(this.translate);
  }

  useLanguage(language: string): void {
    this.localize.changeLanguage(language);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
