import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../../../shared/components/page-not-found/page-not-found.component';
import { SdgsComponent } from './components/sdgs/sdgs.component';
import { ServicesComponent } from './components/services/services.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },

      {
        path: 'portal',
        loadChildren: () =>
          import('./modules/portal/portal.module').then((m) => m.PortalModule),
      },
      {
        path: 'sdgs',
        component: SdgsComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'page-not-found',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
