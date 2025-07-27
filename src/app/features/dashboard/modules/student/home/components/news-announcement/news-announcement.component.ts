import { Component } from '@angular/core';

@Component({
  selector: 'app-news-announcement',
  standalone: false,
  templateUrl: './news-announcement.component.html',
  styleUrl: './news-announcement.component.scss',
})
export class NewsAnnouncementComponent {
  tabs = [
    {
      id: 1,
      label: 'المنح',
      title:
        'انطلق العمل على تحسين التصنيف الدولي لجامعة أسوان في طليعة عام 2018. وبعد عام من العمل الدؤوب وتضافر جهود الجميع بالجامعة وتسخير الإمكانات، صُنفت جامعة أسون كأفضل جامعة مصرية وضمن أفضل 500 جامعة على مستوى العالم في تصنيف التايمز البريطاني THE World Rankings 2020. ومنذ ذلك الحين وعلى مدار ثلاثة أعوام حافظت جامعة أسوان على صدارتها لقائمة أفضل الجامعات المصرية لتصنيف التايمز البريطاني وضمن أفضل 500 جامعة عالمية.',
      description:
        'ومؤخرا حصلت جامعة أسوان على أفضل تصنيف لجامعة مصرية على الإطلاق بحصولها على المركز 67 على مستوى العالم وأفضل جامعة مصرية وإفريقية، في تصنيف THE Impact Ranking 2022 والمعني بالتنمية المستدامة.',
    },
    {
      id: 2,
      label: 'الإعلانات',
      title: 'محتوى الخدمات الطبية',
      description: 'محتوى الإعلانات',
    },
    {
      id: 3,
      label: 'الأخبار',
      title: 'محتوى ولي الأمر',
      description: 'محتوى الأخبار',
    },
  ];

  activeTab = 3;

  sharedCardImage =
    'https://aswu.edu.eg/wp-content/uploads/2025/06/21-2-1-1.jpg';

  onCardClicked() {
    console.log('Shared card clicked!');
  }
}
