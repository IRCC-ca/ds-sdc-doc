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

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('leftSideNavTrigger', [
      // To define animations based on trigger actions
      state('open', style({ opacity: '1', height: '100%' })),
      state('close', style({ opacity: '0', height: '0' })),
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

  mobile =  false; // If window is under mobile view
  showMenu = true; // If show or hide side menu
  navClassName = '';
  barsIconConfig = {
    unicode: 'f0c9',
    fontFamily: 'fa-solid'
  };
  xmarkIconConfig = {
    unicode: 'f00d',
    fontFamily: 'fa-solid'
  }

  constructor(private el: ElementRef) {
    if (el?.nativeElement?.className) {
      this.navClassName = el?.nativeElement?.classList[0];
    }
  }

  ngOnInit() {
    // See node_modules/@ircc-ca/ds-sdc-core/tokens/_sizes.scss:3
    if (this.mobileToggleIcon) {
      this.toggleMobile();
    }
  }

  private toggleMobile() {
    if (window.innerWidth <= 992) {
      this.mobile = true;
      this.showMenu = false;
    } else {
      this.mobile = false;
      this.showMenu = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.mobileToggleIcon) {
      this.toggleMobile();
    }
  }

  toggleMobileMenu() {
    this.showMenu = !this.showMenu;
  }

}
