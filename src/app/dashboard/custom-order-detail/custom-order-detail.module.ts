import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomOrderDetailPageRoutingModule } from './custom-order-detail-routing.module';

import { CustomOrderDetailPage } from './custom-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomOrderDetailPageRoutingModule
  ],
  declarations: [CustomOrderDetailPage]
})
export class CustomOrderDetailPageModule {}
