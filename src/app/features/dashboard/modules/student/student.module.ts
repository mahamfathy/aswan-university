import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SdgsComponent } from './components/sdgs/sdgs.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
@NgModule({
  declarations: [StudentComponent, SdgsComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
