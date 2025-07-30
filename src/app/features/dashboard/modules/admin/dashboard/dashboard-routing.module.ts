import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./components/notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
      },
      {
        path: 'requests',
        loadComponent: () =>
          import('./components/requests/requests.component').then(
            (c) => c.RequestsComponent
          ),
      },
      {
        path: 'scholarships',
        loadComponent: () =>
          import('./components/scholarships/scholarships.component').then(
            (c) => c.ScholarshipsComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./components/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./components/services/services.component').then(
            (c) => c.ServicesComponent
          ),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./components/news/news.component').then(
            (c) => c.NewsComponent
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./components/feedback/feedback.component').then(
            (c) => c.FeedbackComponent
          ),
      },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      // { path: '**', redirectTo: '/dashboard/home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
