import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { UnlockUserComponent } from './pages/unlock-user/unlock-user.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthService } from 'src/app/core/services/firebase/auth.service';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NoAuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
      },

      {
        path: 'unlockuser',
        component: UnlockUserComponent
      },
      {
        path: 'forgetpassword',
        component: ForgetPwdComponent
      },
      {
        path: 'resetpassword',
        component: ResetPwdComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard, NoAuthGuard]
})
export class AuthenticationRoutingModule { }
