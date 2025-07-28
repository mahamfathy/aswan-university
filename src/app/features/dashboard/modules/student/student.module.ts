import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
// import { SharedModule } from '../../shared/shared.module';
// import { ExploreComponent } from './components/explore/explore.component';
// import { LoginRegisterDialogComponent } from './home/components/login-register-dialog/login-register-dialog.component';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { SdgsComponent } from './components/sdgs/sdgs.component';
import { ServicesComponent } from './components/services/services.component';
import { SingleServiceComponent } from './components/services/single-service/single-service.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
@NgModule({
  declarations: [
    StudentComponent,
    SdgsComponent,
    ServicesComponent,
    SingleServiceComponent,
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
