import { Component } from '@angular/core';
export interface PortalServiceCard {
  title: string;
  path: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-portal',
  standalone: false,
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  portalServiceCards: PortalServiceCard[] = [
    {
      title: 'الخدمات الطلابية',
      path: '/auth',
      icon: 'fas fa-user-graduate',
      color: 'bg-rose-600',
    },
    {
      title: 'خدمات هيئة التدريس',
      path: 'faculty-services',
      icon: 'fas fa-chalkboard-teacher',
      color: 'bg-indigo-600',
    },
    {
      title: 'الخدمات الطبية',
      path: 'medical-services',
      icon: 'fas fa-briefcase-medical',
      color: 'bg-green-600',
    },
    {
      title: 'خدمات ولي الأمر',
      path: 'parent-services',
      icon: 'fas fa-user-shield',
      color: 'bg-yellow-600',
    },
    {
      title: 'خدمات الإداريين',
      path: 'admin-services',
      icon: 'fas fa-user-tie',
      color: 'bg-teal-600',
    },
    {
      title: 'خدمات الخريجين',
      path: 'graduates-services',
      icon: 'fas fa-graduation-cap',
      color: 'bg-purple-600',
    },
  ];
}
