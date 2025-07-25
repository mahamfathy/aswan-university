import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
// import { TranslateModule } from '@ngx-translate/core';
// import { QuillModule } from 'ngx-quill';
// import { NgxStripeModule } from 'ngx-stripe';
import { SharedModule } from '../../../../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // TranslateModule,
    SharedModule,
    MatStepperModule,
  ],
  exports: [],
})
export class HomeModule {}
