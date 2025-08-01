import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' },
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./components/notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
        data: { animation: 'notificationsPage' },
      },
      {
        path: 'requests',
        loadComponent: () =>
          import('./components/requests/requests.component').then(
            (c) => c.RequestsComponent
          ),
        data: { animation: 'RequestsPage' },
      },
      {
        path: 'scholarships',
        loadComponent: () =>
          import('./components/scholarships/scholarships.component').then(
            (c) => c.ScholarshipsComponent
          ),
        data: { animation: 'ScholarshipsPage' },
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./components/feedback/feedback.component').then(
            (c) => c.FeedbackComponent
          ),
        data: { animation: 'FeedbackPage' },
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./components/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
        data: { animation: 'reportsPage' },
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./components/services/services.component').then(
            (c) => c.ServicesComponent
          ),
        data: { animation: 'servicesPage' },
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./components/news/news.component').then(
            (c) => c.NewsComponent
          ),
        data: { animation: 'newsPage' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
