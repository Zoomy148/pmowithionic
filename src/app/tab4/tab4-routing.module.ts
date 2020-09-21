import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresaleComponent } from './presale/presale.component';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'presale/:id',
    component: PresaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
