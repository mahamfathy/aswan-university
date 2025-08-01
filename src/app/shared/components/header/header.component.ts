import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
interface NavLink {
  label: string;
  route: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; route: string }[];
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isMobileMenuOpen: boolean = false;

  navLinks: NavLink[] = [
    { label: 'الرئيسية', route: '/home' },
    { label: 'عن الجامعة', route: '/about' },
    { label: 'الأقسام', route: '/departments' },
    { label: 'الكليات والبرامج', route: '/faculties' },
    { label: 'البحث العلمي', route: '/search' },
    { label: 'الخدمات', route: '/services' },
    { label: 'الأخبار', route: '/news' },
    { label: 'الحياة الجامعية', route: '/life' },
    { label: 'القبول', route: '/admissions' },
    { label: 'تواصل معنا', route: '/contact' },
    {
      label: 'البوابة الطلابية',
      route: '/portal',
      hasDropdown: true,
      dropdownItems: [
        { label: 'خدمات طلابيه', route: '/portal/student-services' },
        {
          label: 'خدمات أعضاء هيئة التدريس',
          route: '/portal/faculty-services',
        },
        { label: 'خدمات الإداريين', route: '/portal/admin-services' },
        { label: 'الخدمات الطبيه', route: '/portal/medical-services' },
        { label: 'خدمات ولي الأمر', route: '/portal/parent-services' },
        { label: 'خدمات الخريجين', route: '/portal/graduates-services' },
      ],
    },
  ];
}
