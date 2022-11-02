import { Component, OnInit } from '@angular/core';
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";
import {TranslateService} from "@ngx-translate/core";
import { SideNavConfig} from "../../side-nav/side-nav.config";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  rightNavData: ISideNavDataInterface[];

  constructor(private translate: TranslateService, private router: Router, private navBarConfig : SideNavConfig) {
    this.rightNavData = navBarConfig.getRightNavBarConfig(this.translate);
  }

  ngOnInit(): void {
  }

}
