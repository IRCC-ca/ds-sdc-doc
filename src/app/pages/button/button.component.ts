import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";
import {LangSwitchService} from "../../share/lan-switch/lang-switch.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [SlugifyPipe]
})
export class PageButtonComponent implements OnInit {
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
  private altLangLink: string = 'buttons'; // ROUTE translation path

  constructor(
    private translate: TranslateService,
    private lang: LangSwitchService,
    private navBarConfig: SideNavConfig
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(this.rightNavDataRaw);
  }

  ngOnInit(): void {
    this.lang.setAltLangLink(this.altLangLink);
  }
}
