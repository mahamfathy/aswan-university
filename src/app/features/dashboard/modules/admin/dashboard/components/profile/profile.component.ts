import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // resMessage: string = '';
  // user: IUser | undefined = undefined;
  // constructor(
  //   private _ToastrService: ToastrService,
  //   private _ActivatedRoute: ActivatedRoute,
  //   private _UsersService: UsersService
  // ) {}
  // ngAfterViewInit(): void {
  //   const userId = this._ActivatedRoute.snapshot.paramMap.get('id');
  //   if (userId) {
  //     this._UsersService.getCurrentUser(userId).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.user = res.data.user;
  //       },
  //       error: (err) => {
  //         this._ToastrService.error('Failed to fetch user data');
  //         console.error(err);
  //       },
  //     });
  //   }
  // }
}
