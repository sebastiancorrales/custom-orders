import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { CustomOrdersService } from 'src/app/services/containers/custom-orders.service';

@Component({
  selector: 'app-custom-order-list',
  templateUrl: './custom-order-list.component.html',
  styleUrls: ['./custom-order-list.component.scss'],
})
export class CustomOrderListComponent implements OnInit {
  public result: any;
  @Input() customOrder?: any;
  public customOrderDetails = [];

  constructor(
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private custom_order_service: CustomOrdersService
  ) {}

  ngOnInit() {
    // this.getStatus()
  }
  public getDetailCustomOrder(id: any, store_id: any) {
    this.router.navigate(['dashboard/custom-order-detail', id, store_id]);
  }

  async setStatusCustomOrder(store_id: any, custom_order_number: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccione un estado para el encargo',
      subHeader: '',
      buttons: [
        {
          text: 'Producción',
          data: {
            action: 'production',
            id: 17,
          },
        },
        {
          text: 'Despachado',
          data: {
            action: 'dispatched',
            id: 19,
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    this.result = result;
    // console.log(this.result.data.id )
    if (this.result.data.action != 'cancel') {
      this.custom_order_service.ManageCustomOrder(
        custom_order_number,
        store_id,
        this.result.data.id
      ).subscribe((data:any)=>{
        console.log(data)
      })
    }
  }
}
