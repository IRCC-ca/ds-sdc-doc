import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { getLeftNavBarConfig, getRightNavBarConfig } from './side-nav/side-nav.config';
import { ISideNavDataInterface } from './side-nav/side-nav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ds-sdc-doc';
  leftNavData: ISideNavDataInterface[];
  rightNavData: ISideNavDataInterface[];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    this.useLanguage('en');
    this.leftNavData = getLeftNavBarConfig;
    this.rightNavData = getRightNavBarConfig;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
