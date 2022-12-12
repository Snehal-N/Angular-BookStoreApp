import { Component } from '@angular/core';
import { Bookmodel } from '../../Models/book.model';
import { BookserviceService } from '../../services/bookservice.service';

@Component({
  selector: 'app-recentbooks',
  templateUrl: './recentbooks.component.html',
  styleUrls: ['./recentbooks.component.scss']
})
export class RecentbooksComponent {

   public recentBook:Bookmodel[]=[];
  constructor(private bookService:BookserviceService){}

  ngOnInit():void{
    this.getRecentBook();
  }

  private getRecentBook():void{
   this.recentBook= this.bookService.getRecentBooks()
  }

}
