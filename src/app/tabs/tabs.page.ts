import { Component } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  mobile: boolean = environment.mobile;
  desktop: boolean = environment.desktop;
  constructor() {}

}
