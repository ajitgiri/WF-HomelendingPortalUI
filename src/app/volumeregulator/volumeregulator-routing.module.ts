import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VolumeregulatorHomeComponent } from './volumeregulator-home/volumeregulator-home.component';
import { VolumeregulatorDetailsComponent } from './volumeregulator-details/volumeregulator-details.component';
import { VolumeregulatorListComponent } from './volumeregulator-list/volumeregulator-list.component';

const routes: Routes = [
  {path:'',component: VolumeregulatorHomeComponent},
  {path: 'volumeDetails',component: VolumeregulatorDetailsComponent},
  {path: 'volumeRegulatorList',component: VolumeregulatorListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ]
})
export class VolumeregulatorRoutingModule { }
