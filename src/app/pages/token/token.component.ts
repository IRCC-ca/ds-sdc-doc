import { Component } from '@angular/core';
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  providers: [SlugifyPipe]
})
export class PageTokenComponent {
  rightNavData: ISideNavDataInterface[];
  rightNavDataRaw: string[] = [ // list of all right nav items
    'LeftSideNav.sub-titles.colours',
    'LeftSideNav.sub-titles.typography',
    'Tokens.sub-titles.spacing',
    'Tokens.sub-titles.breakpoints',
  ]

  constructor(
    private translate: TranslateService,
    private navBarConfig: SideNavConfig,
    private slugify: SlugifyPipe
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, this.rightNavDataRaw);
  }

}
