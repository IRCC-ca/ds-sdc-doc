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
  'type': ItemType,
  'category': ItemCategory,
  'path' : string
}



  




