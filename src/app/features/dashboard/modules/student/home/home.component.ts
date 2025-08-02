import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slide } from '../interfaces/slide.interface';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slidesStore: Slide[] = [
    {
      id: '1',
      src: 'assets/images/carousel-home/img1.jpg',
      alt: 'مبني الإدارة المركزية',
      title: 'مبني الإدارة المركزية',
    },
    {
      id: '2',
      src: 'assets/images/carousel-home/img2.jpg',
      alt: 'قاعة مؤتمرات ومسرح أسوان',
      title: 'قاعة مؤتمرات ومسرح أسوان',
    },
    {
      id: '3',
      src: 'assets/images/carousel-home/img3.jpg',
      alt: 'جامعة أسوان الأولي مصرياً ومن أفضل 200 جامعة عالمياً',
      title: 'جامعة أسوان الأولي مصرياً ومن أفضل 200 جامعة عالمياً',
    },
    {
      id: '4',
      src: 'assets/images/carousel-home/img4.jpg',
      alt: 'مدخل جامعة أسوان',
      title: 'مدخل جامعة أسوان',
    },
    {
      id: '5',
      src: 'assets/images/carousel-home/img5.png',
      alt: 'ملاعب جامعة أسوان',
      title: 'ملاعب جامعة أسوان',
    },
    {
      id: '6',
      src: 'assets/images/carousel-home/img6.png',
      alt: 'مبني الإدارة المركزية لجامعة أسوان بمدينة صحاري',
      title: 'مبني الإدارة المركزية لجامعة أسوان بمدينة صحاري',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
