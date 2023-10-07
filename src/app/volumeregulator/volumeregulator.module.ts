import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeregulatorHomeComponent } from './volumeregulator-home/volumeregulator-home.component';
import { VolumeregulatorRoutingModule } from './volumeregulator-routing.module';
import { MaterialModule } from '../material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolumeregulatorDetailsComponent } from './volumeregulator-details/volumeregulator-details.component';
import { VolumeregulatorListComponent } from './volumeregulator-list/volumeregulator-list.component';

@NgModule({
  declarations: [VolumeregulatorHomeComponent, VolumeregulatorDetailsComponent, VolumeregulatorListComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    VolumeregulatorRoutingModule,
    MaterialModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VolumeregulatorModule { }
