import { Component } from '@angular/core';

@Component({
  selector: 'app-sdgs',
  standalone: false,
  templateUrl: './sdgs.component.html',
  styleUrl: './sdgs.component.scss',
})
export class SdgsComponent {
  header: string = 'assets/images/png/sdgs/thumbnail_sdg-header-ar.png';
  sdgsImages: string[] = [
    'assets/images/png/sdgs/img1.png',
    'assets/images/png/sdgs/img2.png',
    'assets/images/png/sdgs/img3.png',
    'assets/images/png/sdgs/img4.png',
    'assets/images/png/sdgs/img5.png',
    'assets/images/png/sdgs/img6.png',
    'assets/images/png/sdgs/img7.png',
    'assets/images/png/sdgs/img8.png',
    'assets/images/png/sdgs/img9.png',
    'assets/images/png/sdgs/img10.png',
  ];
}
