import { LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY } from '@angular/cdk/a11y';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bookmodel } from '../../Models/book.model';
import { BookserviceService } from '../../services/bookservice.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit , AfterViewChecked{

  public model:Bookmodel | any;
  
 constructor(private bookservice:BookserviceService){}

 ngOnInit():void{
  this.model=new Bookmodel();
  this.model.title='';
  //this.model.author='xyz';
  this.model.totalPages=100;
  this.model.price={
    value:100,
    currency:"USD"
  }
  this.model.isPublished=true
 }

 prices:any[]=[
  {value:100,viewValue:'100$'},
  {value:200,viewValue:'200$'},
  {value:300,viewValue:'300$'},

 ]

 @ViewChild('myform') myform: NgForm |any;

  savebook(value:any):void{
    console.log(this.model);
    // const book:Bookmodel=new Bookmodel();
    // //book.id=6;
    // book.title=value.title;
    // book.author=value.author;
    // book.totalPages=value.Pages;
    // book.price.value=value.Price;
    // book.isPublished=value.isPublished;
    // book.publishedOn=value.date;

     if(this.myform.valid)
     {
      this.bookservice.addBook(this.model);
     }
    else
    {
      alert('invalid');
    }


  }
 

 /*@ViewChild('myform') myform:ElementRef | any */
  ngAfterViewChecked(): void {
    
    //console.log(this.myform)
  }


}
