import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/dashboard/modules/student/student.module').then(
        (m) => m.StudentModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    // canActivate: [adminGuard],
    loadChildren: () =>
      import('./features/dashboard/modules/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
];
