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

  books: BookModel[];

  constructor(
      private bookServices: BooksService,
      private basketService: BasketService
  ) {
  }

  ngOnInit() {
    // получаем все книги
    this.bookServices.getBooks().subscribe(dataBooks => {
      this.books = dataBooks;
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
      name: book.name
    };

    this.basketService.addItem(newBasketItem)
        .subscribe((book) => {
          // console.log('add book in basket', book);
        });
  }

}
