import {Injectable} from "@angular/core";
import {ISideNavDataInterface, ItemCategory, ItemType} from "./side-nav.model";

@Injectable({
  providedIn: 'root',
})
export class SideNavConfig {
    /**
        * Loop through an array of navData, translates all the titles and subtitles
        * Sets the default category and type for each right nav subtitle
        * Then use SlugifyPipe to output slugged text, add # to front.
    */
    getRightNavBarConfig(navData: string[]): ISideNavDataInterface[] {
        const rightNavData: ISideNavDataInterface[] = [
            {
                text: 'RightSideNav.title.on-this-page',
                type : ItemType.PlainText,
                category : ItemCategory.Title,
                path: ''
            }
        ];
        navData.forEach(data => {
            rightNavData.push(
                {
                    text: data,
                    type : ItemType.Link,
                    category : ItemCategory.slugUrl,
                    path: data
                }
            )
        })
        return rightNavData
    }

    getLeftNavBarConfig() : ISideNavDataInterface[] {
    return [
        {
            text : 'LeftSideNav.title.getting-started',
            type : ItemType.PlainText,
            category : ItemCategory.Title,
        },
        {
            text : 'LeftSideNav.sub-titles.overview',
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: 'ROUTES.overview'
        },
        {
            text : 'LeftSideNav.sub-titles.for-developers',
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: 'ROUTES.forDevelopers'
        },
        {
            text : 'LeftSideNav.sub-titles.for-designers',
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: 'ROUTES.forDesigners'
        },
        {
            text : 'LeftSideNav.title.foundation',
            type : ItemType.Link,
            category : ItemCategory.Title,
        },
        {
            text : 'Utilities.Heading',
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: 'ROUTES.utilities'
        },
        {
            text : 'LeftSideNav.title.components',
            type : ItemType.Link,
            category : ItemCategory.Title,
        },
        {
            text : 'LeftSideNav.sub-titles.buttons',
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: 'ROUTES.buttons'
        },
        {
            text: 'LeftSideNav.title.support',
            type: ItemType.Link,
            category: ItemCategory.Title,
        },
        {
            text : 'LeftSideNav.sub-titles.contact',
            type : ItemType.Link,
            category : ItemCategory.subTitle,
            path: 'ROUTES.contact'
        },
    ]
    }
}
