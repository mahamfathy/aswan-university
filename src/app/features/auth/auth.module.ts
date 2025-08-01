import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetRequestPasswordComponent } from './components/reset-request-password/reset-request-password.component';
@NgModule({
  declarations: [
    ResetRequestPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
