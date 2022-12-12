import { Injectable } from '@angular/core';

@Injectable()

export class Counter2Service {

  public counter:number=0;
  constructor() { }

  public incCounter(): void{
    this.counter+=2;

  }
   public deccounter=()=>{
     this.counter-=2;
  }
}
