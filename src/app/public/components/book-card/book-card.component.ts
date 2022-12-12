import { Component, Input } from '@angular/core';
import { Bookmodel } from '../../Models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  @Input() 
   set books(books:Bookmodel[])
   {
      books.map(x=> x.title='Title:'+x.title);
      this._books=books;
   }
   get books()
   {
    return this._books;
   }

  private _books:Bookmodel []=[];



}
