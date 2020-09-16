import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UserpageComponent } from './component/userpage/userpage.component';
import { ProjectdetailsComponent } from './component/projectdetails/projectdetails.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'users/:userId',
    component: UserpageComponent,
  },
  {
    path: 'users/:userId/projects/:projectId',
    component: ProjectdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
