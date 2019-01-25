import {Injectable} from '@angular/core';
import {BookModel} from '../models/book.model';
import {BehaviorSubject, of} from 'rxjs';

@Injectable()
export class BasketService {

  purchaseList: BookModel[] = []; // все добавленное в корзину

  private clearSource = new BehaviorSubject(false);
  clearAllItemsEvent = this.clearSource.asObservable();

  private deleteSource = new BehaviorSubject('');
  deleteItemEvent = this.deleteSource.asObservable();

  constructor() {
  }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book: any) {
    this.purchaseList.push(book);
    console.log('addItem', this.purchaseList);
    return of(book);
  }

  deleteItem(id: string) {
    // вариант №1

    // for (let i = 0; i < this.purchaseList.length; i++) {
    //     //   if (this.purchaseList[i].id === id) {
    //     //     this.purchaseList.splice(i, 1);
    //     //     // console.log('delete', this.purchaseList, ' length:', this.purchaseList.length);
    //     //     break;
    //     //   }
    //     // }

    // вариант №2

    const idx = this.purchaseList.findIndex(list => list.id !== id);
    this.purchaseList.splice(idx, 1);
    console.log('delete v.2');

    // уведомим все компоненты об удалении одной книги
    this.deleteSource.next(id);
  }

  clearBasket() {
    // выризаем все эл в карзине.
    this.purchaseList.splice(0, this.purchaseList.length);
    this.clearSource.next(true);
  }

}
