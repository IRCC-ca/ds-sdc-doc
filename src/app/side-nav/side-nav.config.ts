import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ISideNavDataInterface, ItemType, ItemCategory } from "./side-nav.model";
import {SlugifyPipe} from "../share/pipe-slugify.pipe";

@Injectable({
  providedIn: 'root',
})
export class SideNavConfig {
    /**
        * Loop through an array of navData, translates all the titles and subtitles
        * Sets the default category and type for each right nav subtitle
        * Then use SlugifyPipe to output slugged text, add # to front.
    */
    getRightNavBarConfig(
        translator: TranslateService,
        pipe: SlugifyPipe,
        navData: string[]
    ) : ISideNavDataInterface[] {
        const rightNavData: ISideNavDataInterface[] = [
            {
                text: translator.instant('RightSideNav.title.on-this-page'),
                type : ItemType.PlainText,
                category : ItemCategory.Title,
                path: ''
            }
        ];
        navData.forEach(data =>  {
            rightNavData.push(
                {
                    text: translator.instant(data),
                    type : ItemType.Link,
                    category : ItemCategory.slugUrl,
                    path: pipe.transform(translator.instant(data))
                }
            )
        })
        return rightNavData
    }

    getLeftNavBarConfig(translator : TranslateService) : ISideNavDataInterface[] {
    return [
        {
            text : translator.instant('LeftSideNav.title.getting-started'),
            type : ItemType.PlainText,
            category : ItemCategory.Title,
            path: ""
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.overview'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "overview"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.for-developers'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "for-developers"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.for-designers'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "for-designers"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.accessibility'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "accessibility"
        },
        {
            text : translator.instant('LeftSideNav.title.foundation'),
            type : ItemType.Link,
            category : ItemCategory.Title,
            path: ""
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.colours'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "colours"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.typography'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "typography"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.iconography'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "iconography"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.layouts'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "layouts"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.utilities'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "utilities"
        },
        {
            text : translator.instant('LeftSideNav.title.components'),
            type : ItemType.Link,
            category : ItemCategory.Title,
            path: ""
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.buttons'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "buttons"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.checkbox'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "checkbox"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.external-link'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "external-link"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.footer'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "footer"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.header'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "header"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.icon-button'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "icon-button"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.input-field'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "input-field"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.radio-button'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "radio-button"
        },
        {
            text : translator.instant('LeftSideNav.sub-titles.tabs'),
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: "tabs"
        }
    ]
    }
}
