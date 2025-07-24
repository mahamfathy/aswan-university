import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register-dialog',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './login-register-dialog.component.html',
  styleUrl: './login-register-dialog.component.scss',
})
export class LoginRegisterDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginRegisterDialogComponent>,
    private _Router: Router
  ) {}
  onLogin(): void {
    this._Router.navigate(['/auth/login']);
  }
  onRegister(): void {
    this._Router.navigate(['/auth/register']);
  }
}
