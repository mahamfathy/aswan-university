import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthDynamicFormComponent } from './components/auth-dynamic-form/auth-dynamic-form.component';
import { ResetRequestPasswordComponent } from './components/reset-request-password/reset-request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
@NgModule({
  declarations: [AuthDynamicFormComponent, ResetRequestPasswordComponent, ResetPasswordComponent,ChangePasswordComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
