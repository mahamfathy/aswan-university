import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../../../../../shared/shared.module';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [
    DashboardComponent,
    // ChangePasswordComponent,
    // ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SideNavbarComponent,
  ],
})
export class DashboardModule {}
