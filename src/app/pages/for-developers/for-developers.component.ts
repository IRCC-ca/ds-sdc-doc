import {Component, OnInit} from '@angular/core';
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";
import {LanSwitchService} from "../../share/lan-switch/lan-switch.service";

@Component({
  selector: 'app-for-developer',
  templateUrl: './for-developers.component.html',
  styleUrls: ['./for-developers.component.scss'],
  providers: [SlugifyPipe]
})
export class PageForDevelopersComponent implements OnInit {
  rightNavData: ISideNavDataInterface[];
  rightNavDataRaw: string[] = [ // list of all right nav items
    'ForDevelopers.GettingStarted',
    'ForDevelopers.Usage',
    'ForDevelopers.Notes'
  ]
  private altLangLink: string = 'forDevelopers'; // ROUTE translation path
  constructor(
    private translate: TranslateService,
    private lang: LanSwitchService,
    private navBarConfig: SideNavConfig
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(this.rightNavDataRaw);
  }

  ngOnInit(): void {
    this.lang.setAltLangLink(this.altLangLink);
  }
}
