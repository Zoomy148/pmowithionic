import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  constructor(private router: Router) { }
  password: string;
  email: string;
  ngOnInit() { }
  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/tabs/tab1']);
    }
  }
}
