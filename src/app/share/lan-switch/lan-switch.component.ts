import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// @ts-ignore
import en from '../../../assets/locales/en.json';
// @ts-ignore
import fr from '../../../assets/locales/fr.json';
import {LanSwitchService} from "./lan-switch.service";
import {DisplayLanguages, Languages} from "../global-params";

@Component({
  selector: 'app-lan-switch',
  templateUrl: './lan-switch.component.html',
  styleUrls: ['./lan-switch.component.scss']
})
export class LanSwitchComponent implements OnInit {
  /** String for storing the URL of the page with the alternative language set */
  altLangURL: string = '';
  altPathKey: string = '';

  /** Boolean for whether the current window size is mobile or not */
  mobile = false;
  language: string = this.translate.currentLang;
  constructor(
    private translate: TranslateService,
    private altLang: LanSwitchService,
    private router: Router
  ) {
    // Embed languages to avoid extra HTTP requests
    translate.setTranslation('en', en);
    translate.setTranslation('fr', fr);
  }

  ngOnInit(): void {
    this.altLang.getAltLangLink().subscribe((altLang: string) => {
      this.altPathKey = altLang;
      this.setAltLangURL();
    });
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobile = window.innerWidth <= 992;
    this.changeLangStr();
  }

  setAltLangURL() {
    this.altLangURL = this.translate.currentLang ?? Languages.English;
    if (this.altPathKey) this.altLangURL += '/' + this.translate.instant('ROUTES.' + this.altPathKey);
  }

  /** Toggles language without reloading component */
  changeLang(e: Event) {
    e.preventDefault();
    // Swaps language
    const curLang = this.translate.currentLang;
    this.translate.use(curLang === 'en' ? 'fr' : 'en');
    // Changes the html lang attribute
    document.documentElement.lang = (curLang === 'en' ? 'fr' : 'en');
    // Pushes page into history to allow the use of the 'Back' button on browser
    window.history.pushState('', '', this.altLangURL);
    this.setAltLangURL();
    // window.location.replace(this.altLangURL);
    this.router.navigateByUrl(this.altLangURL);
    this.changeLangStr();
  }

  /** Change display string of language **/
  changeLangStr() {
    const curLang = this.translate.currentLang;
    if (this.mobile) {
      curLang === Languages.English ? this.language = DisplayLanguages.FR : this.language = DisplayLanguages.EN;
    } else {
      curLang === Languages.English ? this.language = DisplayLanguages.French : this.language = DisplayLanguages.English;
    }
  }
}
