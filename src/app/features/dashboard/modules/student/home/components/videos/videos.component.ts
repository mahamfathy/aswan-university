import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  standalone: false,
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {
  videoContent: { title: string; url: any }[] = [
    {
      title: 'شرح تفعيل الايميل بتطبيق ميكروسوفت',
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/av3FwS4wmF8'
      ),
    },
    {
      title: 'جامعة أسوان الأولى مصريًا والـ 95 عالميًا',
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/8VZjYgyyWxI'
      ),
    },
    {
      title: 'جولة داخل الحرم الجامعى',
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/-wtrlrawFtw'
      ),
    },
  ];
  constructor(private sanitizer: DomSanitizer) {}
}
