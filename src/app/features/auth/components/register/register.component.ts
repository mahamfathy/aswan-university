import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  selectedUserType: string | null = null;
  showYearField = false;

  faculties = ['كلية الهندسة', 'كلية العلوم', 'كلية التربية', 'كلية الآداب'];
  years = [
    'الفرقة الأولى',
    'الفرقة الثانية',
    'الفرقة الثالثة',
    'الفرقة الرابعة',
  ];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  uploadedFiles: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.firstFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      faculty: ['', Validators.required],
      year: [''],
    });

    this.secondFormGroup = this.fb.group({});
  }

  selectUserType(type: string) {
    this.selectedUserType = type;
  }

  onFacultyChange(faculty: string) {
    this.showYearField = true;
  }

  uploadFile(event: Event, field: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = (reader.result as string).split(',')[1];

      const formData = new FormData();
      formData.append('key', '9f89d3b602291feca2134d423acc095f');
      formData.append('image', base64Image);

      this.http
        .post<any>('https://api.imgbb.com/1/upload', formData)
        .subscribe({
          next: (res) => {
            const imageUrl = res.data.url;
            this.uploadedFiles[field] = imageUrl;
            console.log(`${field} uploaded:`, imageUrl);
          },
          error: (err) => {
            console.error(`Error uploading ${field}:`, err);
            alert('فشل رفع الصورة. جربي صورة أقل حجمًا أو تأكدي من الاتصال.');
          },
        });
    };

    reader.readAsDataURL(file);
  }

  submit() {
    if (this.firstFormGroup.invalid || !this.selectedUserType) {
      this.toastr.error(
        'يرجى تعبئة جميع الحقول المطلوبة في البيانات الأساسية',
        'خطأ'
      );
      return;
    }

    const requiredFiles = [
      'cardFront',
      'cardBack',
      'nationalID',
      'nationalIDBack',
    ];
    const missingFiles = requiredFiles.filter(
      (key) => !this.uploadedFiles[key]
    );

    if (missingFiles.length > 0) {
      this.toastr.error('يرجى رفع جميع الأوراق المطلوبة قبل التسجيل', 'خطأ');
      return;
    }

    const data = {
      ...this.firstFormGroup.value,
      userType: this.selectedUserType,
      uploads: this.uploadedFiles,
    };

    this.toastr.success('تم التسجيل بنجاح!', 'نجاح');
  }

  // get authRoutes() {
  //   return authRoutes;
  // }
}
