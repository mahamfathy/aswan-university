import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminServicesComponent } from './components/admin-services/admin-services.component';
import { FacultyServicesComponent } from './components/faculty-services/faculty-services.component';
import { GraduatesServicesComponent } from './components/graduates-services/graduates-services.component';
import { MedicalServicesComponent } from './components/medical-services/medical-services.component';
import { ParentServicesComponent } from './components/parent-services/parent-services.component';
import { StudentServicesComponent } from './components/student-services/student-services.component';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: 'student-services', component: StudentServicesComponent },
      { path: 'faculty-services', component: FacultyServicesComponent },
      { path: 'admin-services', component: AdminServicesComponent },
      { path: 'medical-services', component: MedicalServicesComponent },
      { path: 'parent-services', component: ParentServicesComponent },
      { path: 'graduates-services', component: GraduatesServicesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
