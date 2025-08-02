import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SdgsComponent } from './components/sdgs/sdgs.component';
import { ServicesComponent } from './components/services/services.component';
import { SingleServiceComponent } from './components/services/single-service/single-service.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
@NgModule({
  declarations: [
    StudentComponent,
    ServicesComponent,
    SdgsComponent,
    SingleServiceComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
