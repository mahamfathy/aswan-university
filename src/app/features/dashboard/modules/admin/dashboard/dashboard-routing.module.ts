import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RequestsComponent } from './components/requests/requests.component';
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
        data: { animation: 'PageTransition' },
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: { animation: 'PageTransition' },
      },
      {
        path: 'requests',
        component: RequestsComponent,
        data: { animation: 'PageTransition' },
      },
      {
        path: 'scholarships',
        loadComponent: () =>
          import('./components/scholarships/scholarships.component').then(
            (c) => c.ScholarshipsComponent
          ),

        data: { animation: 'PageTransition' },
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./components/feedback/feedback.component').then(
            (c) => c.FeedbackComponent
          ),
        data: { animation: 'PageTransition' },
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./components/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
        data: { animation: 'PageTransition' },
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./components/services/services.component').then(
            (c) => c.ServicesComponent
          ),
        data: { animation: 'PageTransition' },
      },
      {
        path: 'news',
        component: NewsComponent,
        data: { animation: 'PageTransition' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
