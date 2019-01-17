import {LinkBook} from './linkBook.model';

export class BookModel {
  constructor(
      public name: string,
      public author: string,
      public description: string,
      public links: LinkBook[],
      public date: string,
      public sum?: number,
      public count?: number,
      public isAddBasket?: boolean,
      public price?: number,
      public id?: string,
  ) {
  }
}