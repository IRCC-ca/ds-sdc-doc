import { Component } from '@angular/core';
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";

@Component({
  selector: 'app-for-developer',
  templateUrl: './for-developers.component.html',
  styleUrls: ['./for-developers.component.scss'],
  providers: [SlugifyPipe]
})
export class PageForDevelopersComponent {
  rightNavData: ISideNavDataInterface[];
  rightNavDataRaw: string[] = [ // list of all right nav items
    'ForDevelopers.GettingStarted',
    'ForDevelopers.Usage',
    'ForDevelopers.Notes'
  ]
  constructor(
    private translate: TranslateService,
    private navBarConfig: SideNavConfig,
    private slugify: SlugifyPipe
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, this.rightNavDataRaw);
  }

}
