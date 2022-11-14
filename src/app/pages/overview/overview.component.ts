import { Component } from '@angular/core';
import { ISideNavDataInterface } from "../../side-nav/side-nav.model";
import { TranslateService } from "@ngx-translate/core";
import { SideNavConfig } from "../../side-nav/side-nav.config";
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  rightNavData: ISideNavDataInterface[];

  constructor(private translate: TranslateService, private router: Router, private navBarConfig : SideNavConfig) {
    this.rightNavData = [];
  }

}
