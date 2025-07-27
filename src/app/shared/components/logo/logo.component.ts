import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  logoImage: string = 'assets/images/png/aswulogo.png';
  sdgsImage: string = 'assets/images/png/sdgs-header.png';
  visitAswu: string = 'assets/images/png/visit-aswu.png';
}
