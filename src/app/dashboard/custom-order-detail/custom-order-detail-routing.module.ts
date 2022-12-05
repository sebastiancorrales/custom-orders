import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomOrderDetailPage } from './custom-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CustomOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomOrderDetailPageRoutingModule {}
