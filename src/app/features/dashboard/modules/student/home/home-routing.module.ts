import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
// import { userGuard } from '../../../core/guards/user/user.guard';
// import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'payment',
  //   // component: PaymentComponent,
  //   //  canActivate: [userGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
