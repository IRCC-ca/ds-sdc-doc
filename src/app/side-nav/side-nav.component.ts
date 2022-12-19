import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ISideNavDataInterface } from './side-nav.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('leftSideNavTrigger', [
      // To define animations based on trigger actions
      state('open', style({ opacity: '1'})),
      state('close', style({ opacity: '0', height: '0', "pointer-events": "none" })),
      transition('open => close', [
        animate('300ms ease-in')
      ]),
      transition('close => open', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {
  @Input() mobileToggleIcon: boolean = false; // If display toggle menu icon
  @Input() navBarData : ISideNavDataInterface[] = [];

  currentLanguage : string = '';
  mobile =  false; // If window is under mobile view
  showMenu = true; // If show or hide side menu
  navClassName = '';
  navStatus = 'nav-closed';
  barsIconConfig = {
    unicode: 'f0c9',
    fontFamily: 'fa-solid'
  };
  xmarkIconConfig = {
    unicode: 'f00d',
    fontFamily: 'fa-solid'
  }
  width: number = 0; // Width of component

  constructor(private el: ElementRef, private translate: TranslateService) {
    if (el?.nativeElement?.className) {
      this.navClassName = el?.nativeElement?.classList[0];
    }
  }

  ngOnInit() {
    // See node_modules/@ircc-ca/ds-sdc-core/tokens/_sizes.scss:3
    this.currentLanguage = this.translate.currentLang
    if (this.mobileToggleIcon) {
      this.toggleMobile();
    }
    this.adjustWidth();
  }

  private toggleMobile() {
    if (window.innerWidth <= 992) {
      this.mobile = true;
      this.showMenu = false;
      this.navStatus = 'nav-closed';
    } else {
      this.mobile = false;
      this.showMenu = true;
      this.navStatus = 'nav-open';
    }
  }

  /**
   * Grab width from parent element and bind it to child
   * If side nav does not show up, check if row is enabled in component style sheet.
   */
  private adjustWidth() {
    this.width = this.el.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.mobileToggleIcon) {
      this.toggleMobile();
    }
    this.adjustWidth()
  }

  toggleMobileMenu(hideOnClickMobileView : boolean) {

    if(hideOnClickMobileView) { //minimize left nav after menu item clicked in mobileView
      if (this.mobile && this.navStatus === 'nav-open') {
        this.navStatus = "nav-closed"
        this.showMenu = !this.showMenu;
      }
    } else {
      if(this.showMenu) {
        window.scrollTo(0, 0);
        this.navStatus = "nav-closed"
        this.showMenu = !this.showMenu;
      }
      else {
        window.scrollTo(0, 0);
        this.showMenu = !this.showMenu;
        this.navStatus = "nav-open"
      }
    }
  }
}
