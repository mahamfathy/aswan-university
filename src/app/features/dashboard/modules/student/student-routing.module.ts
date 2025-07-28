import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SdgsComponent } from './components/sdgs/sdgs.component';
import { ServicesComponent } from './components/services/services.component';
import { StudentComponent } from './student.component';
// import { userGuard } from '../../core/guards/user/user.guard';
// import { exploreRoomWithFiltersResolver } from './resolvers/explore-room-with-filters.resolver';
// import { favoriteRoomsResolver } from './resolvers/favorite-rooms.resolver';
// import { RoomDetailsComponent } from './home/components/room-details/room-details.component';

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
      // {
      // path: 'home/:id',
      // component: RoomDetailsComponent,
      // },
      {
        path: 'portal',
        loadChildren: () =>
          import('./modules/portal/portal.module').then((m) => m.PortalModule),
        // resolve: { filters: exploreRoomWithFiltersResolver },
      },
      {
        path: 'sdgs',
        component: SdgsComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      // {
      //   path: 'favorites',
      //   component: FavRoomsComponent,
      //   canActivate: [userGuard],
      //   resolve: { filters: favoriteRoomsResolver },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
