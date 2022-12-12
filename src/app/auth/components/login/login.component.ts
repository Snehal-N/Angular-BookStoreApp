import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route:ActivatedRoute,private router: Router){

  }

  /*ngOnInit(): void{
    this.route.queryParams.subscribe((params)=>{
      
      console.log(params);
     //this.userid=params['userId']
      
    })
  }*/

  goToSignup():void{
    this.router.navigate(['auth/signup']);
  }
  
  goToBookDetails(id:number):void{
    this.router.navigate(['public/book-details',id]);
  }

}
