import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent {

   userid :number=0;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void{

    
    this.route.parent?.params.subscribe((params)=>{
      console.log(this.route);
      console.log(params);
     this.userid=params['userId']
      
    })
  }
}
