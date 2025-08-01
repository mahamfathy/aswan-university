import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsComponent } from '../../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { SingleServiceComponent } from './single-service/single-service.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SharedModule, BreadcrumbsComponent, SingleServiceComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      title: 'خدمات طلاب',
      image: 'assets/images/jpg/services/img1.jpg',
      route: '/auth',
    },
    {
      title: 'خدمات إلكترونية',
      image: 'assets/images/jpg/services/img2.jpg',
      route: '/services/electronic-services',
    },
    {
      title: 'خدمات مجتمع',
      image: 'assets/images/jpg/services/img3.jpg',
      route: '/services/community-services',
    },
    {
      title: 'خدمات طبية',
      image: 'assets/images/jpg/services/img4.jpg',
      route: '/services/medical-services',
    },
    {
      title: 'خدمات لوجستية',
      image: 'assets/images/jpg/services/img5.jpg',
      route: '/services/logistic-services',
    },
    {
      title: 'خدمات خريجين',
      image: 'assets/images/jpg/services/img6.jpg',
      route: 'graduates-services',
    },
    {
      title: 'خدمات هيئة أعضاء التدريس',
      image: 'assets/images/jpg/services/img7.jpg',
      route: '/services/faculty-services',
    },
    {
      title: 'مرافق',
      image: 'assets/images/jpg/services/img8.jpg',
      route: '/services/facilities',
    },
  ];
  constructor(private router: Router) {}
  navigateToService(route: string): void {
    this.router.navigate([route]);
  }
}
