import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../../../../../shared/shared.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NewsItem } from './interfaces/news-item.interface';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  @ViewChild('formSection') formSection!: ElementRef;
  newsForm!: FormGroup;
  isEditing = false;
  editingId: number | null = null;
  newsList: NewsItem[] = [];
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      date: ['', Validators.required],
    });

    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews().subscribe((news) => {
      this.newsList = news;
    });
  }

  openEdit(news: NewsItem): void {
    this.isEditing = true;
    this.editingId = news.id!;
    this.newsForm.patchValue(news);
    this.showForm = true;

    setTimeout(() => {
      this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  openFormForNew(): void {
    this.resetForm();
    this.showForm = true;

    setTimeout(() => {
      this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  openDeleteDialog(news: NewsItem): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'تأكيد الحذف',
        actionType: 'delete',
        message: 'هل أنت متأكد أنك تريد حذف هذا الخبر؟',
        newsData: news,
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.deleteNews(news.id!);
      }
    });
  }

  onSubmit(): void {
    if (this.newsForm.invalid) {
      this.newsForm.markAllAsTouched();
      this.toastr.warning('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const formData = this.newsForm.value;

    if (this.isEditing && this.editingId) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'تأكيد التعديل',
          actionType: 'edit',
          message: 'هل تريد حقًا تعديل هذا الخبر؟',
          newsData: formData,
        },
      });

      dialogRef.afterClosed().subscribe((confirmed) => {
        if (confirmed) {
          this.newsService.editNews(this.editingId!, formData).subscribe({
            next: () => {
              this.toastr.success('تم تعديل الخبر بنجاح');
              this.resetForm();
              this.loadNews();
            },
            error: () => {
              this.toastr.error('فشل تعديل الخبر');
            },
          });
        }
      });
    } else {
      this.newsService.addNews(formData).subscribe({
        next: () => {
          this.toastr.success('تم إضافة الخبر بنجاح');
          this.resetForm();
          this.loadNews();
        },
        error: () => {
          this.toastr.error('فشل إضافة الخبر');
        },
      });
    }
  }

  deleteNews(id: number): void {
    this.newsService.deleteNews(id).subscribe({
      next: () => {
        this.newsList = this.newsList.filter((item) => item.id !== id);
        this.toastr.success('تم حذف الخبر بنجاح');
      },
      error: () => {
        this.toastr.error('فشل حذف الخبر');
      },
    });
  }

  cancelEdit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.newsForm.reset();
    this.isEditing = false;
    this.editingId = null;
    this.showForm = false;
  }
}
