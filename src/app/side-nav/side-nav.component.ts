import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isTitle = true;
  @Input() title = '';
  @Input() category = '';

  ngOnInit() {
    if(this.category === 'title') {
      this.isTitle = true;
    } else {
      this.isTitle= false;
    }
  }
}
