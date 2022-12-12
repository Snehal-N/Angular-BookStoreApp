import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';
import { RecentbooksComponent } from './components/recentbooks/recentbooks.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [

      { path: '', component: AllBooksComponent },
      { path: 'book-details/:id', component: BookDetailsComponent },
      {path:'recent' ,component: RecentbooksComponent},
      {path:'new' ,component:AddBookComponent}
    

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class BooksRoutingModule { }
