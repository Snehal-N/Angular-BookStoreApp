import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HomeComponent } from '../public-components/home/home.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent} from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { SharedModule} from '../shared/shared.module';
import { RecentbooksComponent } from './components/recentbooks/recentbooks.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddBookComponent } from './components/add-book/add-book.component'
import { FormsModule } from '@angular/forms';
import { ReactiveAddBookComponent } from './components/reactive-add-book/reactive-add-book.component';


@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    BookDetailsComponent,
    RecentbooksComponent,
    BookCardComponent,
    AddBookComponent,
    ReactiveAddBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BooksModule { }
