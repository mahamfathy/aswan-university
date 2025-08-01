import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private toastr: ToastrService) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.toastr.error('يرجى إدخال اسم المستخدم وكلمة المرور', 'خطأ');
      return;
    }

    this.toastr.success('✅ تسجيل الدخول بنجاح', 'مرحبًا');
    console.log('المستخدم:', this.username);
    console.log('تذكرني:', this.rememberMe);
  }
}
