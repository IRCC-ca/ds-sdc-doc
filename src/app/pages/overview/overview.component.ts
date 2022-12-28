import {Component, OnInit} from '@angular/core';
import { ISideNavDataInterface } from "../../side-nav/side-nav.model";
import { TranslateService } from "@ngx-translate/core";
import { SideNavConfig } from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {LanSwitchService} from "../../share/lan-switch/lan-switch.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [SlugifyPipe]
})
export class OverviewComponent implements OnInit {
  rightNavData: ISideNavDataInterface[];
  currentLanguage : string = '';
  private altLangLink: string = 'overview';

  constructor(
    private translate: TranslateService,
    private lang: LanSwitchService,
    private slugify: SlugifyPipe,
    private navBarConfig : SideNavConfig
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, []);
    this.currentLanguage = translate.currentLang;
  }

  ngOnInit(): void {
    this.lang.setAltLangLink(this.altLangLink);
  }

}
