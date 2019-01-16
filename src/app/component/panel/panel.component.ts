import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {BookModel} from '../../models/book.model';
import {CurrencyService} from '../../services/currency.service';
import {CurrencyModel} from '../../models/currency.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  books: BookModel[] = [];
  searchText: string;
  searchingResult: BookModel[] = [];
  currentCurrency: CurrencyModel;

  constructor(
      public bookService: BooksService,
      public currencyService: CurrencyService
  ) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });

    // ($s) - Subscribe on currency update
    this.currencyService.selectedCurrency.subscribe(data => {
      // console.log('Subscribe on currency update', data);

      // находим объект с полем "isActive"
      this.currentCurrency = data.find(obj => obj.isActive);
      // console.log('this.currentCurrency ', this.currentCurrency  );
    });

  }

  searchBook() {
    this.searchingResult = this.books
        .filter(book => book.name.toLowerCase().indexOf(this.searchText) !== -1);
  }

}
