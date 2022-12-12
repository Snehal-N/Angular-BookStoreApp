import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorComponent } from 'src/app/shared/components/author/author.component';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit{

  ngAfterViewInit(): void {
   
  }
  ngOnInit(): void {
    
  }

  /*public childData($event:any):void{

    console.log($event);

  }
  constructor(public counterser:CounterService){}

  public increase():void{
    
    this.counterser.incCounter();
  }

  public decrease():void{
      this.counterser.deccounter();
  }

  //@ViewChild(AuthorComponent) private childAuthor:AuthorComponent=new AuthorComponent();
  @ViewChild('author') private childAuthor:AuthorComponent=new AuthorComponent(); //using template ref var

  @ViewChild('decButton')
  private decButton: MatButton | any
  
  ngOnInit():void{
    
  }
  ngAfterViewInit(): void {

    setTimeout(()=>{
       
      this.childAuthor.setData(10);

      this.decButton.color='warn';

    },0);
    
  }*/
}
