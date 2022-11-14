import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SideNavConfig} from "../../side-nav/side-nav.config";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class PageButtonComponent {
  rightNavData = [

  ];

  constructor(private translate: TranslateService, private navBarConfig : SideNavConfig) {
    
  }

}
