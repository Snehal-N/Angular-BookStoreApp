import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AboutusComponent } from './public-components/aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './public/books.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { HomeComponent } from './public-components/home/home.component';


const routes:Routes =[

  {path:'', component: HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'auth', component:AuthComponent, loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)},
  {path:'book', component:BooksComponent, loadChildren:()=>import('./public/books.module').then(x=>x.BooksModule)},
  {path:'**', component:NotfoundComponent}
  
  
  

];




@NgModule({

  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
