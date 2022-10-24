import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { getLeftNavBarConfig, getRightNavBarConfig } from './side-nav/side-nav.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ds-sdc-doc';
  rightNavData;
  leftNavData;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    this.useLanguage('en');
    this.rightNavData = getRightNavBarConfig;
    this.leftNavData = getLeftNavBarConfig;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
