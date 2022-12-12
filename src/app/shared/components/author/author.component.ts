import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  ngOnInit(): void {}






  
  /*public data:number=0;
  

  @Input()
  showAuthors:boolean=false;

  @Input()
  get data(){
    return this._data;
  }
  set data(value:number){

      this._data=++value;
  }

  private _data:number=0;
  
  public setData(value:number):void{
   
    this.data=value;
  }

  @Output() myData= new EventEmitter<string>

  public btnClick():void{
     this.myData.emit('This text is from child ');
  }*/

}
