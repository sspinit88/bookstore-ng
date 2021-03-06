import {Injectable} from '@angular/core';
import {BookModel} from '../models/book.model';
import {Observable, of} from 'rxjs';
import {AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable()
export class BooksService {

  booksCollection: AngularFirestoreCollection<BookModel>;
  bookDoc: AngularFirestoreDocument<BookModel>;
  books: Observable<BookModel[]>;
  book: Observable<BookModel>;

  constructor(
      private afs: AngularFirestore
  ) {
    this.booksCollection = this.afs.collection('books');
  }

  getBooks() {
    this.books = this.booksCollection.snapshotChanges()
        .pipe(map(collection => {
          return collection.map(document => {
            const data = document.payload.doc.data() as BookModel;
            data.id = document.payload.doc.id;

            return data;
          });
        }));
    return this.books;
  }

  getBookById(id: string) {
    // console.log('id', id);
    // const book = this.books.find(book => book.id === id);
    // return of(book);
  }

  addBook(book: BookModel) {

  }

  editBook(book: BookModel) {
    // this.books = this.books.map(item => {
    //   if (item.id === book.id) {
    //     item = book;
    //   }
    //   return item;
    // })
    return of(book);
  }

  deleteBook(id: string) {

  }

}
