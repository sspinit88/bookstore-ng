import {CheckoutItemModel} from 'checkoutItem.model';

export class OrderModel {
  constructor(
      public name: string,
      public email: string,
      public phone: string,
      public status: string,
      public items: CheckoutItemModel[],
  ) {
  }
}