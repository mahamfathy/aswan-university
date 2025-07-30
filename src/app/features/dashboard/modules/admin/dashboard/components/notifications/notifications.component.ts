import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../../shared/shared.module';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  notifications = [
    {
      title: 'موعد الامتحان النهائي',
      message: 'الامتحان النهائي لكلية الهندسة سيكون يوم 12 أغسطس.',
      type: 'info',
    },
    {
      title: 'تنبيه إداري',
      message: 'يرجى تحديث بيانات الطالب قبل نهاية الشهر.',
      type: 'warning',
    },
    {
      title: 'تهنئة 🎉',
      message: 'تمت ترقية الأستاذة Maha إلى درجة أستاذ مشارك!',
      type: 'success',
    },
  ];
}
