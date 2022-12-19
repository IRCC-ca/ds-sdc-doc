import { Component } from '@angular/core';
import { ISideNavDataInterface } from "../../side-nav/side-nav.model";
import { TranslateService } from "@ngx-translate/core";
import { SideNavConfig } from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [SlugifyPipe]
})
export class OverviewComponent {
  rightNavData: ISideNavDataInterface[];
  currentLanguage : string = '';

  constructor(private translate: TranslateService, private slugify: SlugifyPipe, private navBarConfig : SideNavConfig) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, []);
    this.currentLanguage = translate.currentLang;
  }

}
