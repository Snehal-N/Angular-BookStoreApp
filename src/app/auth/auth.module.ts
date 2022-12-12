import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import {RouterModule,Routes} from '@angular/router';
import { SingupComponent } from './components/singup/singup.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    SingupComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
