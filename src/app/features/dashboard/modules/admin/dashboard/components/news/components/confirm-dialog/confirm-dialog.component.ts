import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../../../../../../../shared/shared.module';
import { NewsItem } from '../../interfaces/news-item.interface';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { actionType: 'edit' | 'delete'; newsData: NewsItem }
  ) {}

  confirmAction(): void {
    this.dialogRef.close(true);
  }

  cancelAction(): void {
    this.dialogRef.close(false);
  }
}
