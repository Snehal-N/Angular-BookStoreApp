import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';


const routes:Routes =[
 
  
    
    {path:'login', component:LoginComponent},
    {path:'signup', component:SingupComponent}

  

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
   ],
   exports:[RouterModule],
})
export class AuthRoutingModule { }
