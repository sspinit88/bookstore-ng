import {LinkBook} from './linkBook.model';

export class BookModel {
  constructor(
      public name: string,
      public author: string,
      public description: string,
      public links: LinkBook[],
      public date: string,
      public isAddBasket?: boolean,
      public id?: string,
      public price?: any,
  ) {
  }
}