import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../../../../shared/shared.module';

interface IMenu {
  name: string;
  icon: string;
  route: any;
}
@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {
  imageUrl = 'assets/images/avatar.avif';
  isMenuOpen: boolean = false;
  navItems: IMenu[] = [
    {
      name: 'الرئيسية',
      icon: 'home',
      route: 'home',
    },
    {
      name: 'الإشعارات',
      icon: 'notifications',
      route: 'notifications',
    },
    {
      name: 'الطلبات',
      icon: 'assignment',
      route: 'requests',
    },
    {
      name: 'منح الوافدين',
      icon: 'school',
      route: 'scholarships',
    },
    {
      name: 'التقارير',
      icon: 'bar_chart',
      route: 'reports',
    },
    {
      name: 'الخدمات الإلكترونية',
      icon: 'settings',
      route: 'services',
    },
    {
      name: 'الأخبار',
      icon: 'article',
      route: 'news',
    },
    {
      name: 'استقبال الآراء',
      icon: 'feedback',
      route: 'feedback',
    },
    {
      name: 'تسجيل الخروج',
      icon: 'logout',
      route: '/home',
    },
  ];
  constructor(private router: Router) {}
}
