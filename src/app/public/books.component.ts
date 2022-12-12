import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void{

    
   
  }
}



 /*this.route.firstChild ?.params.subscribe((params)=>{
   
      console.log(params);
     //this.userid=params['userId']
      
    })*/