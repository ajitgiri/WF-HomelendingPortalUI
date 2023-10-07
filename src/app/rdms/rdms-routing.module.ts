import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdmsHomeComponent } from './rdms-home/rdms-home.component';

const routes: Routes = [
  {path:'',component: RdmsHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class RdmsRoutingModule { }
