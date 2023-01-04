import { Component, OnInit } from '@angular/core';
import { SideNavConfig } from '../side-nav/side-nav.config';
import { ISideNavDataInterface } from '../side-nav/side-nav.model';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  leftNavData: ISideNavDataInterface[];
  navStatus = 'nav-open';

  constructor(private navBarConfig: SideNavConfig) {
    this.leftNavData = navBarConfig.getLeftNavBarConfig();
  }

  ngOnInit(): void {
  }

}
