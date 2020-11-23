import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment} from '../../environments/environment';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  constructor(private router: Router,
              public alertCtrl: AlertController) { }
  password: string;
  email: string;
  ngOnInit() { }
  async login() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Ошибка',
      message: 'Вы неверно ввели логин или пароль',
      buttons: ['OK']
    });
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/tabs/tab1']);
    } else {
      await alert.present();
    }
  }
}
