import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {ItemCategory, ItemType} from "../../side-nav/side-nav.model";
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [SlugifyPipe]
})
export class PageButtonComponent {
  rightNavData: ISideNavDataInterface[];
  rightNavDataRaw = [
    {
      textKey: 'RightSideNav.title.on-this-page',
      type : ItemType.PlainText,
      category : ItemCategory.Title,
    }
  ]

  constructor(
    private translate: TranslateService,
    private navBarConfig: SideNavConfig,
    private slugify: SlugifyPipe
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, this.rightNavDataRaw);
  }

}
