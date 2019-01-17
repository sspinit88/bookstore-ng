// import {CheckoutItemModel} from 'checkoutItem.model';
export interface CheckoutItemModel {
  name: string;
  price: number;
  psum: number;
  count: number;
  id?: string;
}


export class OrderModel {
  constructor(public name: string,
              public email: string,
              public phone: string,
              public status: string,
              public items: CheckoutItemModel[]) {
  }
}