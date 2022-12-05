import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  public GetStores() {
    return this.http.get(`${environment.BASE_URL}/stores/`, {
      headers: { "Authorization": `Bearer ${environment.ACCESS_TOKEN}` },
    });
  }
}
