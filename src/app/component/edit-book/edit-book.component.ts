import {Component, OnInit, ViewChild} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookId: string;

  book: BookModel;

  @ViewChild('form') form;

  constructor(
      private booksServices: BooksService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) {
  }

  ngOnInit() {
    // в snapshot хранится состояние маршрутов
    // params['id'] - это то, что указано "path: 'books/:id'"
    this.bookId = this.activatedRoute.snapshot.params['id'];
    // console.log('bookId', this.bookId);

    // this.booksServices.getBookById(this.bookId)
    //     .subscribe((response: BookModel) => {
    //       this.book = response;
    //     });
  }

  editBook() {
    const updateBook = this.form.value;
    this.booksServices.editBook(updateBook).subscribe((book: BookModel) => {
      if (book) {
        this.router.navigate(['/panel']);
      }
    });

  }

}
