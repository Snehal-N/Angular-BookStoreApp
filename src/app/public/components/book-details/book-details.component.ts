import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
    Id:number=12;
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void{
    //console.log(this.route);
    this.route.params.subscribe((params)=>{
      //console.log(params);
      //this.Id=params['id'];
      //this.Id=14;
    })
  }

}
