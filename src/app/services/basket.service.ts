import {Injectable} from '@angular/core';
import {BookModel} from '../models/book.model';
import {BehaviorSubject, of} from 'rxjs';

@Injectable()
export class BasketService {

  purchaseList: BookModel[] = []; // все добавленное в корзину

  private clearSource = new BehaviorSubject(false);
  clearAllItemsEvent = this.clearSource.asObservable();

  private deleteSource = new BehaviorSubject("");
  deleteItemEvent = this.deleteSource.asObservable();

  constructor() {
  }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book: BookModel) {
    this.purchaseList.push(book);
    // console.log('add', this.purchaseList);
    return of(book);
  }

  deleteItem(id: string) {
    // вариант №1

    for (let i = 0; i < this.purchaseList.length; i++) {
      if (this.purchaseList[i].id === id) {
        this.purchaseList.splice(i, 1);
        // console.log('delete', this.purchaseList, ' length:', this.purchaseList.length);
        break;
      }
    }

    // вариант №2

    // this.purchaseList = this.purchaseList.filter(list => list.id !== id);
    // console.log('delete', this.purchaseList, ' length:', this.purchaseList.length);

    // уведомим все компоненты об удалении одной книги
    this.deleteSource.next(id);
  }

  clearBasket() {
    // выризаем все эл в карзине.
    this.purchaseList.splice(0, this.purchaseList.length);
    this.clearSource.next(true);
  }

}
