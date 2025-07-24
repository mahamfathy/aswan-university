import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { NgChartsModule } from 'ng2-charts';
// import { SharedModule } from '../../../shared/shared.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
@NgModule({
  declarations: [
    // DashboardComponent,
    // HeaderComponent,
    // SideNavbarComponent,
    // HomeComponent,
    ChangePasswordComponent,
    // ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // , SharedModule, NgChartsModule
  ],
})
export class DashboardModule {}
