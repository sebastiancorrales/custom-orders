import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomOrdersService } from 'src/app/services/containers/custom-orders.service';

@Component({
  selector: 'app-custom-order-detail',
  templateUrl: './custom-order-detail.page.html',
  styleUrls: ['./custom-order-detail.page.scss'],
})
export class CustomOrderDetailPage implements OnInit {
  public id: Number = 0;
  public store_id: Number = 0;
  public customOrder: any;
  public customOrderDetail:any;
  public customOrderAdvances:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private custom_order_service: CustomOrdersService
  ) {}
  ionViewWillEnter(){

  }
  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.store_id = +this.activatedRoute.snapshot.params['store_id'];
    this.getDetailCustomOrder();
  }

  public getDetailCustomOrder() {
    this.custom_order_service
      .GetCustomOrderDetails(this.id, this.store_id)
      .subscribe((data: any) => {
        this.customOrder = data['custom_order'];
        console.log(this.customOrder.date);
        this.customOrderDetail = data['custom_order_detail'];
        this.customOrderAdvances = data['custom_order_advances'];
      });
  }
}
