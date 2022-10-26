import { ISideNavDataInterface, ItemType, ItemCategory } from "./side-nav.model";

export const getRightNavBarConfig : ISideNavDataInterface[] = 
[
    {
        text : 'On this Page',
        type : ItemType.PlainText,
        category : ItemCategory.Title
    },
    {
        text : 'Buttons',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Interactive Demo',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Usage',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Anatomy',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Specs',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Content guidelines',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Accessibility',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Research',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Related components',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    }
]

export const getLeftNavBarConfig : ISideNavDataInterface[] = 
[
    {
        text : 'Getting Started',
        type : ItemType.PlainText,
        category : ItemCategory.Title
    },
    {
        text : 'Overview',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'For developers',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'For designers',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Accessibility',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Foundation',
        type : ItemType.Link,
        category : ItemCategory.Title
    },
    {
        text : 'Colours',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Typography',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Iconography',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Layouts',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Tokens',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Components',
        type : ItemType.Link,
        category : ItemCategory.Title
    },
    {
        text : 'Buttons',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Checkbox',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'External Link',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Footer',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Header',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Icon button',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Input field',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Radio button',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    },
    {
        text : 'Tabs',
        type : ItemType.Link,
        category : ItemCategory.subTitle
    }
]