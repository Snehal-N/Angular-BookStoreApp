import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module'
import { AppComponent } from './app.component';
import { AboutusComponent } from './public-components/aboutus/aboutus.component';
import { UserModule } from './user/user.module';
import { BooksModule } from './public/books.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './public-components/home/home.component';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //AuthModule,
     UserModule,
    //BooksModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [{provide:CounterService,useExisting:Counter2Service},Counter2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
