import {Component, OnInit} from '@angular/core';
import {TranslatedPageComponent} from "../translated-page-component";
import {LangSwitchService} from "../../share/lan-switch/lang-switch.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class PageContactComponent implements OnInit, TranslatedPageComponent {
  constructor(private lang: LangSwitchService) { }

  altLangLink = 'contact';

  ngOnInit(): void {
    this.lang.setAltLangLink(this.altLangLink);
  }
}
