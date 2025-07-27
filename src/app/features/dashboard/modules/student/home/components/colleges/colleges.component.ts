import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-colleges',
  standalone: false,
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.scss',
})
export class CollegesComponent {
  slidesStore = [
    {
      id: '1',
      src: 'assets/images/colleges/col1.png',
      alt: 'كلية الزراعة',
    },
    {
      id: '2',
      src: 'assets/images/colleges/col2.jpg',
      alt: 'كلية الاثار',
    },
    {
      id: '3',
      src: 'assets/images/colleges/col3.jpg',
      alt: 'معهد البحوث',
    },
    {
      id: '4',
      src: 'assets/images/colleges/col4.png',
      alt: 'كلية الفنون',
    },
    {
      id: '5',
      src: 'assets/images/colleges/col5.png',
      alt: 'كلية الحقوق',
    },
    {
      id: '6',
      src: 'assets/images/colleges/col6.png',
      alt: 'كلية التجارة',
    },
    {
      id: '7',
      src: 'assets/images/colleges/col7.jpeg',
      alt: 'كلية دار العلوم',
    },
    {
      id: '8',
      src: 'assets/images/colleges/col8.jpg',
      alt: 'كلية التربية',
    },
    {
      id: '9',
      src: 'assets/images/colleges/col9.jpg',
      alt: 'كلية هندسة الطاقة',
    },
    {
      id: '10',
      src: 'assets/images/colleges/col10.jpg',
      alt: 'كلية الهندسة',
    },
    {
      id: '11',
      src: 'assets/images/colleges/col11.jpg',
      alt: 'تكنولوجيا المصايد ',
    },
    {
      id: '12',
      src: 'assets/images/colleges/col12.png',
      alt: 'كلية الألسن',
    },
    {
      id: '13',
      src: 'assets/images/colleges/col13.jpg',
      alt: 'كلية الطب',
    },
    {
      id: '14',
      src: 'assets/images/colleges/col14.jpg',
      alt: 'المعهد الفني للتمريض',
    },
    {
      id: '15',
      src: 'assets/images/colleges/col15.jpg',
      alt: 'كلية التمريض',
    },
    {
      id: '16',
      src: 'assets/images/colleges/col16.png',
      alt: 'كلية التربية الرياضية',
    },
    {
      id: '17',
      src: 'assets/images/colleges/col17.jpg',
      alt: 'كلية العلوم',
    },
    {
      id: '18',
      src: 'assets/images/colleges/col18.jpg',
      alt: 'كلية التربية النوعية',
    },
    {
      id: '19',
      src: 'assets/images/colleges/col19.jpg',
      alt: 'كلية الطب البيطري',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    animateIn: 'fadeIn',
    autoplayHoverPause: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive: {
      0: { items: 3 },
      600: { items: 5 },
      1000: { items: 7 },
    },
  };
}
