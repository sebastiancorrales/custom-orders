import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookies: CookieService) {}
  public Login(data: any) {
    return this.http.post(`${environment.BASE_URL}/login/`, data);
  }
  public setToken(token: string) {
    this.cookies.set('token', token);
  }
  public getToken() {
    return this.cookies.get('token');
  }
}
