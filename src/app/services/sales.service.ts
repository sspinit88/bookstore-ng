import {Injectable} from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {OrderModel} from '../models/order.model';

@Injectable()
export class SalesService {

  ordersCollection: AngularFirestoreCollection<OrderModel>;
  orderDoc: AngularFirestoreDocument<OrderModel>;
  orders: Observable<OrderModel[]>;
  order: Observable<OrderModel>;

  constructor(
      private afs: AngularFirestore
  ) {
    this.ordersCollection = this.afs.collection('orders');
  }

  addNewOrder(order) {
    return of(this.ordersCollection.add(order));
  }
}
