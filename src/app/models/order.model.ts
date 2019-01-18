// import {CheckoutItemModel} from 'checkoutItem.model';
export interface CheckoutItemModel {
  name: string;
  price: number;
  sum: number;
  count: number;
  id?: string;
}

// тут есть проблема
export class OrderModel {
  constructor(
      public name?: string,
      public email?: string,
      public phone?: string,
      public status?: string,
      public items?: CheckoutItemModel[],
      public id?: string,
      public total?: number,
  ) {
  }
}