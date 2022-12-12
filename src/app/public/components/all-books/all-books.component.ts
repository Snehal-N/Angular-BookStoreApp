import { Component } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';
import { Bookmodel } from '../../Models/book.model';
import { BookserviceService } from '../../services/bookservice.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  //providers:[BookserviceService]
})
export class AllBooksComponent {

  public books:Bookmodel[] =[];

  constructor(public bookService:BookserviceService,public counterser:Counter2Service){
   
    
  }

  ngOnInit():void{

    const allBooks=this.bookService.getBooks();
      allBooks.forEach(b=>{
        var obj=new Bookmodel();
        obj.id=b.id;
        obj.author=b.author;
        obj.title=b.title;
        obj.price=b.price;
        obj.totalPages=b.totalPages;
        obj.isPublished=b.isPublished;
        obj.publishedOn=b.publishedOn;
        this.books.push(obj);
      })

    console.log(this.books);
  }

  public increase():void{
    
    this.counterser.incCounter();
  }

  public decrease():void{
      this.counterser.deccounter();
  }
}
