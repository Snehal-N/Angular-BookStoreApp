import { Injectable } from '@angular/core';
import { Bookmodel } from '../Models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() { }

  private allBooks=[

    {
      "id":1,
      "title":"Angular",
      "totalPages":345,
       "author":"RAM",
       "price":{
        "currency":"INR",
         "value":199
       }

    },

    {
      "id":2,
      "title":"react",
      "totalPages":3445,
       "author":"RAM singh",
       "price":{
        "currency":"INR",
         "value":235
       }

    },
  
    {
      "id":3,
      "title":"Redux",
      "totalPages":356,
       "author":"shyam",
       "price":{
        "currency":"INR",
         "value":454
       }

    },

    {
      "id":4,
      "title":"firebase",
      "totalPages":305,
       "author":"Shyam kumar",
       "price":{
        "currency":"INR",
         "value":179
       }

    },

    {
      "id":5,
      "title":".Net",
      "totalPages":700,
       "author":"kumar setu",
       "price":{
        "currency":"INR",
         "value":599
       }

    },

  ];

  public addBook(bookmodel:Bookmodel):void{
    console.log(bookmodel);
    this.allBooks.push(bookmodel);
    //console.log(this.allBooks);
  }

  public getBooks():any[]{

    return this.allBooks;

  }



  public getRecentBooks():any[]{
    return[
      {
        "id":1,
        "title":"Angular",
        "totalPages":345,
         "author":"RAM",
         "price":{
          "currency":"INR",
           "value":199
         }

      },

      {
        "id":2,
        "title":"react",
        "totalPages":3445,
         "author":"RAM singh",
         "price":{
          "currency":"INR",
           "value":235
         }

      },
    ]

  }
}
