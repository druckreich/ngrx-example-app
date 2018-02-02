import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as BookActions from '../store/book/book.actions';
import {Book} from '../store/book/book.model';
import * as fromRoot from '../store/reducers';
import {selectAllBooks} from '../store/reducers';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Output()
  showDetails: EventEmitter<Book> = new EventEmitter();

  books$: Observable<Book[]> = this.store.select(selectAllBooks);
  // bookTotal$: Observable<number> = this.store.select(fromRoot.selectBookTotal);

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  handleKeyupEnter(filter: string): void {
    this.store.dispatch(new BookActions.SearchBook(filter));
  }

  // handleDeleteButtonClicked(): void {
  //   this.store.dispatch(new BookActions.DeleteBooks({ids: this.checkedBookIds}));
  //   this.checkedBookIds = [];
  // }
  //
  // handleCheckBookChange(book: Book): void {
  //   const index: number = this.checkedBookIds.indexOf(book.id);
  //   if (index === -1) {
  //     this.checkedBookIds = [...this.checkedBookIds, book.id];
  //   } else {
  //     this.checkedBookIds = [...this.checkedBookIds.slice(0, index), ...this.checkedBookIds.slice(index + 1)];
  //   }
  // }
  //
  // handleListGroupItemClick(book: Book): void {
  //   this.showDetails.emit(book);
  // }

}