import {Component, HostListener, OnInit} from '@angular/core';
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
  mobile = false;
  barsIconConfig = {
    unicode: 'f0c9',
    fontFamily: 'fa-solid'
  };
  showMenu = true;

  constructor() { }

  ngOnInit(): void {
    // See node_modules/@ircc-ca/ds-sdc-core/tokens/_sizes.scss:3
    this.toggleMobile();
  }

  private toggleMobile() {
    if (window.innerWidth <= 768) {
      this.mobile = true;
      this.showMenu = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.toggleMobile()
  }

  toggleMobileMenu() {
    this.showMenu = !this.showMenu;
  }
}
