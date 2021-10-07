import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnlockUserComponent } from './pages/unlock-user/unlock-user.component';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UnlockUserComponent,
    ResetPwdComponent,
    ForgetPwdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
