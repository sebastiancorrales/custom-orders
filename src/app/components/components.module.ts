import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CustomOrderListComponent } from './custom-order-list/custom-order-list.component';
import { CustomOrderSegmentComponent } from './custom-order-segment/custom-order-segment.component';

@NgModule({
  declarations: [CustomOrderListComponent, CustomOrderSegmentComponent],
  imports: [CommonModule, IonicModule],
  exports: [CustomOrderListComponent, CustomOrderSegmentComponent],
})
export class ComponentsModule {}
