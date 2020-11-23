import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommerceComponent } from './commerce/commerce.component';
import { PresaleComponent } from './presale/presale.component';

import { Tab4Page } from './tab4.page';
import {ExitAboutGuard} from '../guards/exit.guard';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'presale/:id',
    component: PresaleComponent
  },
  {
    path: 'commerce/:id',
    component: CommerceComponent,
    canDeactivate: [ExitAboutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
