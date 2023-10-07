import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdmsHomeComponent } from './rdms-home/rdms-home.component';
import { RdmsRoutingModule } from './rdms-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [RdmsHomeComponent],
  imports: [
    CommonModule,
    RdmsRoutingModule,
    MaterialModule
  ]
})
export class RdmsModule { }
