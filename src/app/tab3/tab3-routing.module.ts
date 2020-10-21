import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import {VacancyPageComponent} from './vacancy-page/vacancy-page.component';
import {NewVacancyPageComponent} from './new-vacancy-page/new-vacancy-page.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'vacancy/:id',
    component: VacancyPageComponent
  },
  {
    path: 'add-new-vacancy',
    component: NewVacancyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
