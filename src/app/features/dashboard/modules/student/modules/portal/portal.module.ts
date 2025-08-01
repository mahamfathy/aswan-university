import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { AdminServicesComponent } from './components/admin-services/admin-services.component';
import { FacultyServicesComponent } from './components/faculty-services/faculty-services.component';
import { GraduatesServicesComponent } from './components/graduates-services/graduates-services.component';
import { MedicalServicesComponent } from './components/medical-services/medical-services.component';
import { ParentServicesComponent } from './components/parent-services/parent-services.component';
import { StudentServicesComponent } from './components/student-services/student-services.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

@NgModule({
  declarations: [
    PortalComponent,
    AdminServicesComponent,
    FacultyServicesComponent,
    GraduatesServicesComponent,
    MedicalServicesComponent,
    ParentServicesComponent,
    StudentServicesComponent,
  ],
  imports: [CommonModule, PortalRoutingModule, SharedModule],
})
export class PortalModule {}
