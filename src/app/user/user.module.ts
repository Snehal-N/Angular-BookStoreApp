import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddBookComponent } from './components/add-book/add-book.component';
import { UserComponent } from './user.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';


@NgModule({
  declarations: [
    AddBookComponent,
    UserComponent,
    DeleteBookComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
