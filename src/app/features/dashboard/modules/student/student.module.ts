import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
// import { SharedModule } from '../../shared/shared.module';
// import { ExploreComponent } from './components/explore/explore.component';
// import { LoginRegisterDialogComponent } from './home/components/login-register-dialog/login-register-dialog.component';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
@NgModule({
  declarations: [
    StudentComponent,
    // LoginRegisterDialogComponent,
    // FavRoomsComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    // ExploreComponent
    SharedModule,
    NgOptimizedImage,
    NgxPaginationModule,
  ],
})
export class StudentModule {}
