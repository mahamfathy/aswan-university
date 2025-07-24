import { Component } from '@angular/core';
import { authRoutes } from '../../routes/auth-routes-enum';

@Component({
  selector: 'app-reset-request-password',
  templateUrl: './reset-request-password.component.html',
  styleUrl: './reset-request-password.component.scss',
})
export class ResetRequestPasswordComponent {
  // formType: string = "resetRequestPassword";
  // formTitle: string = "Reset Password";
  // buttonName: string = "Reset";
  // constructor(private _AuthService: AuthService, private _Router: Router) {}
  // resetReqPassword(formValue: FormGroup) {
  //   console.log(formValue.value);
  //   this._AuthService.resetPassword(formValue.value).subscribe({
  //     next: (res) => {
  //       localStorage.setItem("email", formValue.get("email")?.value);
  //     },
  //     complete: () => {
  //       this._Router.navigate([authRoutes.LOGIN]);
  //     },
  //   });
  // }
  get authRoutes() {
    return authRoutes;
  }
}
