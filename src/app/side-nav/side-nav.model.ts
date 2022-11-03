export enum ItemType {
  Link = 'link',
  PlainText = 'plain_text'
}

export enum ItemCategory {
  Title = 'title',
  subTitle = 'sub-title'
}

export interface ISideNavDataInterface {
  'text': string,
  'type': ItemType, // If the nav item is a link or plain text
  'category': ItemCategory, // If the nav item is title or subtitle
  'path' : string // Link for nav item
}
