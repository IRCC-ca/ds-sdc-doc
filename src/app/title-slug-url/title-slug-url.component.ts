import {AfterContentInit, Component, ElementRef, Input} from '@angular/core';
import { SlugifyPipe } from "../share/pipe-slugify.pipe";

@Component({
  selector: 'app-title-slug-url',
  templateUrl: './title-slug-url.component.html',
  styleUrls: ['./title-slug-url.component.scss'],
  providers: [SlugifyPipe]
})
export class TitleSlugUrlComponent implements AfterContentInit {
  @Input() type = 'secondary'; // primary | secondary
  title = '';
  titleSlugified = ''; // overview-test
  slugifiedUrl = ''; // http://localhost:4200/en/overview#overview-test

  constructor(private el: ElementRef, private slugify: SlugifyPipe) {
  }

  ngAfterContentInit(): void {
    this.title = this.el.nativeElement.childNodes[0].childNodes[0].data;
    this.titleSlugified = this.slugify.transform(this.title);
    this.slugifiedUrl = this.el.nativeElement.ownerDocument.location.origin
      + this.el.nativeElement.ownerDocument.location.pathname
      + '#' + this.titleSlugified;
  }

}
