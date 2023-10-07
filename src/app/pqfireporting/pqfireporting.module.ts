import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PqfireportingHomeComponent } from './pqfireporting-home/pqfireporting-home.component';
import { PqfireportingRoutingModule } from './pqfireporting-routing.module';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';



@NgModule({
  declarations: [PqfireportingHomeComponent],
  imports: [
    CommonModule,
    PqfireportingRoutingModule,
    CommonmaterialModule
  ]
})
export class PqfireportingModule { }
