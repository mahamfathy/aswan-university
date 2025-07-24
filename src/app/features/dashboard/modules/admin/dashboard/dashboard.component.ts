import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isExpand: boolean = false;
  profileImage: string = '';
  imageUrl: string = 'https://upskilling-egypt.com:3000/';
  // constructor(private authService: AuthService) {}
  toggleSidebar(): void {
    this.isExpand = !this.isExpand;
  }

  // ngOnInit(): void {
  //   const id = localStorage.getItem('userId');

  //   if (id !== null) {
  //     this.authService.getAdmin(id).subscribe({
  //       next: (res: IApiResponse) => {
  //         if (res) {
  //           this.profileImage = res.data.user!.profileImage;
  //         }
  //       },
  //       error: (err: any) => {
  //         console.log(err);
  //       },
  //     });
  //   } else {
  //     console.log('User ID not found in local storage');
  //   }
  // }
}
