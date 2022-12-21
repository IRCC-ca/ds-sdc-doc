import { Component, HostListener, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SideNavConfig } from './side-nav/side-nav.config';
import { ISideNavDataInterface } from './side-nav/side-nav.model';
import {LocalizeNgModuleFactory, LocalizeRouterService} from "@gilsdav/ngx-translate-router";
import { DefaultHomePage, DisplayLanguages, Languages, StorageKeys } from './share/global-params';
import { Url } from './share/services/url.service';
import { ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ds-sdc-doc';
  leftNavData: ISideNavDataInterface[];
  language = this.getCurrentLang();
  mobile = false;
  navStatus = 'nav-oepn';
  locale: any = sessionStorage.getItem(StorageKeys.Locale)
  public innerWidth: any; // Width of viewport window

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService,
    private navBarConfig : SideNavConfig,
  ) {
    // translate.setDefaultLang(Languages.English);
    this.setLanguage()
    this.leftNavData = navBarConfig.getLeftNavBarConfig(this.translate);
  }

  ngOnInit() {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 992 ) {
      this.mobile = true;
      this.navStatus = 'nav-closed';
      this.toggleLanguage(this.getCurrentLang());
    }
    else {
      this.mobile = false;
      this.navStatus = 'nav-open';
      this.toggleLanguage(this.getCurrentLang());
    }
  }

  toggleLanguage(locale : string) : void {
    if (this.mobile) {
      locale === Languages.English ? this.language = DisplayLanguages.FR : this.language = DisplayLanguages.EN;
    }
    else {
      locale === Languages.English ? this.language = DisplayLanguages.French : this.language = DisplayLanguages.English;
    }
  }

  setLanguage() {
    let url = window.location.pathname // gett current url
    let urlKeys = url.split("/")

    // remove the slash at the first character of the url, which makes an empty element on the
    // keys array, and add it back when return the new url
    if (url[0] === '/') {
      urlKeys.shift()
    }
    
    let extractedLang = urlKeys[0]
    const langs = ['en', 'fr']
    if (!extractedLang || !langs.includes(extractedLang)){ //if invalid url navigate to default overview page
      console.log("URL UNDEFINED")
      sessionStorage.setItem(StorageKeys.Locale, Languages.English) // set default session storage to english
      const locale: any = sessionStorage.getItem(StorageKeys.Locale)
      this.translate.addLangs(langs)
      this.translate.setDefaultLang(locale)
      window.location.replace(Url.translateUrlWithLang(DefaultHomePage, locale))
      return this.translate.use(locale)
    }
    else {
      sessionStorage.setItem(StorageKeys.Locale, extractedLang)
      const locale: any = sessionStorage.getItem(StorageKeys.Locale)
      this.translate.addLangs(langs)
      this.translate.setDefaultLang(locale)
      return this.translate.use(locale)
    }
  }

  useLanguage(): void {
    let currentUrl = window.location.pathname // get current url
    let currentLanguage = this.getCurrentLang();
    let updatedLanguage = '';
    currentLanguage === Languages.English ? updatedLanguage = Languages.French : updatedLanguage = Languages.English;
    sessionStorage.setItem(StorageKeys.Locale, updatedLanguage)
    window.location.replace(Url.translateUrlWithLang(currentUrl, updatedLanguage))
  }

  getCurrentLang(): string {
    let currentLanguage : any = sessionStorage.getItem(StorageKeys.Locale);
    this.toggleLanguage(currentLanguage);
    return currentLanguage;
  }
}
