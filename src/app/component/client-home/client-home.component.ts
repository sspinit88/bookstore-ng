import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/book.model';
import {BooksService} from '../../services/books.service';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  // пустые массивы нужны, что бы при работе с foreach не выдавал undefined
  books: BookModel[] = [];
  basketItems = [];

  constructor(
      private bookServices: BooksService,
      private basketService: BasketService
  ) {
  }

  ngOnInit() {
    // get basket item
    // важно писать первым, иначе не будет работать
    this.basketService.getBasketItem()
        .subscribe(items => {
          if (items.length) {
            // получаем эл из корзины
            this.basketItems = items;
          }
        });
    // получаем все книги
    this.bookServices.getBooks().subscribe(dataBooks => {
      this.books = dataBooks;
      // console.log('все книги ', this.books, 'книги из корзины ', this.basketItems);

      // проверяем наличие элементов в корзине
      if (this.basketItems.length) { // пояснение lesson-17 ~1:00:00
        this.basketItems.forEach(item => {
          this.books.forEach(book => {
            if (book.id === item.id) {
              book.isAddBasket = true;
            }
          });
        });
      }
    });
    // subscribe on clear
    this.basketService.clearAllItemsEvent.subscribe(response => {
      if (response) {
        this.books.forEach(book => book.isAddBasket = false);
      }
    });
    // subscribe on delete book from basket
    this.basketService.deleteItemEvent.subscribe(responseId => {
      if (responseId) {
        this.books.forEach(book => {
          if (book.id === responseId) {
            book.isAddBasket = false;
          }
        });
      }
    });
  }

  addBook(book: BookModel) {
    const newBasketItem = {
      id: book.id,
      price: book.price,
      name: book.name,
      sum:  book.price,
      count: 1
    };

    this.basketService.addItem(newBasketItem)
        .subscribe((book) => {
          // console.log('add book in basket', book);
        });
  }

  deleteBookFromBasket(id) {
    // console.log('deleteBookFromBasket(id)', id);
    this.basketService.deleteItem(id);
  }

}
