import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOrdersService } from '../services/containers/custom-orders.service';
import { StoresService } from '../services/containers/stores.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public customOrders = [];
  public customOrderDetails = [];
  public customOrderNumber = 0
  public stores = [];
  public currentStores = [];
  public final_date = '2022-12-31'
  public start_date = '2022-11-01'

  public body_data = {
    stores: [],
    start_date: this.start_date,
    final_date: this.final_date,
    custom_order_number: this.customOrderNumber
  };
  constructor(
    private custom_order_service: CustomOrdersService,
    private stores_service: StoresService,
  ) {}
  ngOnInit() {
    this.GetStores();
  }
  public GetCustomOrders(body_data:any) {
    this.custom_order_service.GetCustomOrders(body_data).subscribe(
      (data: any) => {
        this.customOrders = data;
      },
      (error: any) => {
      }
    );
  }
  public GetStores() {
    this.stores_service.GetStores().subscribe((data: any) => {
      this.stores = data;
    });
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

  handleChange(ev: any) {
    this.currentStores = ev.target.value.map((obj: any) => { return obj.id; });
    this.body_data.stores = this.currentStores
  }
  handdlecustomOrderNumber(ev: any) {
    this.customOrderNumber = ev.target.value;
    this.body_data.custom_order_number = this.customOrderNumber
  }
  handdleStartDate(ev: any) {
    this.start_date = ev.target.value.split('T')[0];
    this.body_data.start_date = this.start_date
  }
  handdleFinalDate(ev: any) {
    this.final_date = ev.target.value.split('T')[0];
    this.body_data.final_date = this.final_date
  }
  search(){
    this.GetCustomOrders(this.body_data);
  }
}
