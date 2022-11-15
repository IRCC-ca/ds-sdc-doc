import {Component} from '@angular/core';

@Component({
  selector: 'app-info-text-small',
  templateUrl: './info-text-small.component.html',
  styleUrls: ['./info-text-small.component.scss']
})
export class InfoTextSmallComponent {
  circleInfoIcon = {
    unicode: 'f05a',
    fontFamily: 'fa-regular',
  }

  constructor() {
  }

}
