import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formLogin: any = FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private login: LoginService,
    private router: Router,
    private alertController: AlertController
  ) {}
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      identification: [''],
      password: [''],
    });
  }
  public PostLogin() {
    this.login.Login(this.formLogin.value).subscribe(
      (data: any) => {
        this.login.setToken(data.token);
        environment.ACCESS_TOKEN = data['access-token'];
        environment.REFRESH_TOKEN = data['refresh-token'];
        environment.USER = data['user'];
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        this.errorAlertLogin(error.error);
      }
    );
  }

  async errorAlertLogin(error: any) {
    const alert = await this.alertController.create({
      header: '¡Alerta!',
      subHeader: 'Error inicio de sesión',
      message: `${error.error}`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
