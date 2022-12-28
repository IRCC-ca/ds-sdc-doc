import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";
import {SlugifyPipe} from "../../share/pipe-slugify.pipe";
import {
  breakpoint,
  breakpoints,
  colorSample,
  colorSamples,
  spacingsFixed,
  typography,
  typographys
} from "./utilities.constant";
import {SafeHtmlPipe} from "../../share/safe-html.pipe";
import {LanSwitchService} from "../../share/lan-switch/lan-switch.service";

@Component({
  selector: 'app-page-token',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  providers: [SlugifyPipe, SafeHtmlPipe],
  encapsulation: ViewEncapsulation.None
})
export class PageUtilitiesComponent implements OnInit {
  rightNavData: ISideNavDataInterface[];
  rightNavDataRaw: string[] = [ // list of all right nav items
    'LeftSideNav.sub-titles.colours',
    'LeftSideNav.sub-titles.typography',
    'Utilities.SpacingHeading',
    'Utilities.BreakpointsHeading',
  ]
  colorSample: colorSample[] = colorSamples;
  spacingSample: number[] = spacingsFixed;
  breakpoints: breakpoint[] = breakpoints;
  typographySample: typography[] = typographys;
  private altLangLink: string = 'utilities'; // ROUTE translation path

  constructor(
    private translate: TranslateService,
    private lang: LanSwitchService,
    private navBarConfig: SideNavConfig,
    private slugify: SlugifyPipe
  ) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(translate, slugify, this.rightNavDataRaw);
  }

  ngOnInit(): void {
    this.lang.setAltLangLink(this.altLangLink);
  }
}
