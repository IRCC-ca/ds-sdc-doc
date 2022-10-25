import {Component, HostListener, Input, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  animations: [
    trigger('leftSideNavTrigger', [
      // To define animations based on trigger actions
      state('open', style({ transform: 'translateY(0%)', height: '100%' })),
      state('close', style({ transform: 'translateY(-103%)', height: '0' })),
      transition('open => close', [
        animate('300ms ease-in')
      ]),
      transition('close => open', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class SidenavContainerComponent implements OnInit {
  // If display toggle menu icon
  @Input() mobileToggleIcon: boolean = false;
  // If window is under mobile view
  mobile = false;
  // If show or hide side menu
  showMenu = true;
  barsIconConfig = {
    unicode: 'f0c9',
    fontFamily: 'fa-solid'
  };

  constructor() { }

  ngOnInit(): void {
    // See node_modules/@ircc-ca/ds-sdc-core/tokens/_sizes.scss:3
    if (this.mobileToggleIcon) {
      this.toggleMobile();
    }
  }

  private toggleMobile() {
    if (window.innerWidth <= 768) {
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
