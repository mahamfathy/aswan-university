import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoComponent } from '../../../../../shared/components/logo/logo.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SideNavbarComponent,
    LogoComponent,
  ],
})
export class DashboardModule {}
