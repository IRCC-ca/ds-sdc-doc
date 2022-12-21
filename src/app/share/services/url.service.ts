import { Inject, Injectable, OnInit } from "@angular/core";
import { Languages, StorageKeys } from "../global-params";

const pathDictionary: any = {
    "en": {
        "overview": "overview",
        "for-developers": "for-developers",
        "for-designers": "for-designers",
        "accessibility": "accessibility",
        "colours": "colours",
        "typography": "typography",
        "iconography": "iconography",
        "layouts": "layouts",
        "utilities": "utilities",
        "buttons": "buttons",
        "checkbox": "checkbox",
        "external-link": "external-link",
        "footer": "footer",
        "header": "header",
        "icon-button": "icon-button",
        "input-field": "input-field",
        "radio-button": "radio-button",
        "tabs": "tabs",
        "overviewFR": "overview",
        "for-developersFR": "for-developers",
        "for-designersFR": "for-designers",
        "accessibilityFR": "accessibility",
        "coloursFR": "colours",
        "typographyFR": "typography",
        "iconographyFR": "iconography",
        "layoutsFR": "layouts",
        "utilitiesFR": "utilities",
        "buttonsFR": "buttons",
        "checkboxFR": "checkbox",
        "external-linkFR": "external-link",
        "footerFR": "footer",
        "headerFR": "header",
        "icon-buttonFR": "icon-button",
        "input-fieldFR": "input-field",
        "radio-buttonFR": "radio-button",
        "tabsFR": "tabs"

      },
    "fr": {
        "overview": "overviewFR",
        "for-developers": "for-developersFR",
        "for-designers": "for-designersFR",
        "accessibility": "accessibilityFR",
        "colours": "coloursFR",
        "typography": "typographyFR",
        "iconography": "iconographyFR",
        "layouts": "layoutsFR",
        "utilities": "utilitiesFR",
        "buttons": "buttonsFR",
        "checkbox": "checkboxFR",
        "external-link": "external-linkFR",
        "footer": "footerFR",
        "header": "headerFR",
        "icon-button": "icon-buttonFR",
        "input-field": "input-fieldFR",
        "radio-button": "radio-buttonFR",
        "tabs": "tabsFR",
        "overviewFR": "overviewFR",
        "for-developersFR": "for-developersFR",
        "for-designersFR": "for-designersFR",
        "accessibilityFR": "accessibilityFR",
        "coloursFR": "coloursFR",
        "typographyFR": "typographyFR",
        "iconographyFR": "iconographyFR",
        "layoutsFR": "layoutsFR",
        "utilitiesFR": "utilitiesFR",
        "buttonsFR": "buttonsFR",
        "checkboxFR": "checkboxFR",
        "external-linkFR": "external-linkFR",
        "footerFR": "footerFR",
        "headerFR": "headerFR",
        "icon-buttonFR": "icon-buttonFR",
        "input-fieldFR": "input-fieldFR",
        "radio-buttonFR": "radio-buttonFR",
        "tabsFR": "tabsFR",
    }
}

@Injectable({
    providedIn: 'root',
  })
  export class Url {
    constructor() {
    }

    public static translateUrlWithLang(url : string, locale : any) : string{
        let urlArray = url.split("/") // /en/overview
        url = urlArray[urlArray.length-1]
        let translatedUrl  = "";
        translatedUrl= pathDictionary[locale][url]
        translatedUrl= "/"+locale+"/"+translatedUrl;
        return translatedUrl;
    }
}