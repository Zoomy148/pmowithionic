import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { Tab4Page } from './tab4.page';
import { CommerceComponent } from './commerce/commerce.component';
import { PresaleComponent } from './presale/presale.component';
import { ModalPage } from './commerce/modalPage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    MatExpansionModule
  ],
  declarations: [Tab4Page, CommerceComponent, PresaleComponent, ModalPage]
})
export class Tab4PageModule {}
