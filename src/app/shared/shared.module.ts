import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { AuthorComponent } from './components/author/author.component'


@NgModule({
  declarations: [
    NotfoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[ToolbarComponent,FooterComponent,MaterialModule,AuthorComponent]
})
export class SharedModule { }
