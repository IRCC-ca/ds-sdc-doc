import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [SlugifyPipe]
})
export class PageButtonComponent {
  rightNavData: ISideNavDataInterface[];
  rightNavDataRaw: string[] = [ // list of all right nav items
    'Buttons.title.buttons',
    'Buttons.sub-titles.types',
    'Buttons.sub-titles.configs',
    'Buttons.sub-titles.design-guideline',
    'Buttons.sub-titles.anatomy',
    'Buttons.sub-titles.content-guideline',
    'Buttons.sub-titles.usage-figma',
    'Buttons.sub-titles.accessibility',
    'Buttons.sub-titles.research'
  ]
  
  constructor(
    private translate: TranslateService,
    private navBarConfig: SideNavConfig,
    private slugify: SlugifyPipe
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, this.rightNavDataRaw);
  }

}
