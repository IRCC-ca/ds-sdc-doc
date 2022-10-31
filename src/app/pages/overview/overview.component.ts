import { Component, OnInit } from '@angular/core';
import {ISideNavDataInterface} from "../../side-nav/side-nav.model";
import {TranslateService} from "@ngx-translate/core";
import {getRightNavBarConfig} from "../../side-nav/side-nav.config";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  rightNavData: ISideNavDataInterface[];

  constructor(private translate: TranslateService) {
    this.rightNavData = getRightNavBarConfig;
  }

  ngOnInit(): void {
  }

}
