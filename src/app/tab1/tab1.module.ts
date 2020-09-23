import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { UserpageComponent } from './component/userpage/userpage.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectdetailsComponent } from './component/projectdetails/projectdetails.component';
import { SearchPipe } from './services/search.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    
  ],
  declarations: [
    Tab1Page,
    UserpageComponent,
    ProjectComponent,
    ProjectdetailsComponent,
    SearchPipe
  ]
})
export class Tab1PageModule {}
