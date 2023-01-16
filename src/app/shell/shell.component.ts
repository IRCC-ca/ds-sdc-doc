import {Component, HostListener, OnInit} from '@angular/core';
import { SideNavConfig } from '../side-nav/side-nav.config';
import { ISideNavDataInterface } from '../side-nav/side-nav.model';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  title = 'ds-sdc-doc';
  leftNavData: ISideNavDataInterface[];
  mobile = false;
  navStatus = 'nav-open';
  public innerWidth: any; // Width of viewport window

  constructor(
    private translate: TranslateService,
    private router: Router,
    private navBarConfig: SideNavConfig
  ) {
    this.leftNavData = navBarConfig.getLeftNavBarConfig();
  }

  ngOnInit(): void {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 992 ) {
      this.mobile = true;
      this.navStatus = 'nav-closed';
    }
    else {
      this.mobile = false;
      this.navStatus = 'nav-open';
    }
  }
}
