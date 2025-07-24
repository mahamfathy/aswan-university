import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { authRoutes } from '../../../../../../auth/routes/auth-routes-enum';
import { AuthService } from '../../../../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [MatIcon, RouterModule, MatMenuModule, MatButtonModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;
  userId: string | null = null;
  @Input() profileImage: string = '';

  constructor(private _AuthService: AuthService, private router: Router) {
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
  }
  onLogout(): void {
    this._AuthService.logout();
    this.router.navigate([authRoutes.LOGIN]);
  }
}
