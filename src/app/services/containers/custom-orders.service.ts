import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CustomOrdersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  public GetCustomOrders(data: any) {
    return this.http.post(`${environment.BASE_URL}/custom-orders/`, data, {
      headers: { Authorization: `Bearer ${environment.ACCESS_TOKEN}` },
    });
  }
  public GetCustomOrderDetails(id: any, store_id: any) {
    const data = {
      custom_order_number: id,
      store_id: store_id,
    };
    return this.http.post(
      `${environment.BASE_URL}/detail-custom-orders/`,
      data,
      {
        headers: { Authorization: `Bearer ${environment.ACCESS_TOKEN}` },
      }
    );
  }

  public ManageCustomOrder(id: any, store_id: any, status_id: any) {
    const data = {
      custom_order_number: id,
      store_id: store_id,
      status_id: status_id,
    };
    return this.http.put(
      `${environment.BASE_URL}/manage-custom-orders/`,
      data,
      {
        headers: { Authorization: `Bearer ${environment.ACCESS_TOKEN}` },
      }
    );
  }
}
