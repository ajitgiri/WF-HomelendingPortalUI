import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqfireportingHomeComponent } from './pqfireporting-home/pqfireporting-home.component';

const routes: Routes = [
  {path:'',component: PqfireportingHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class PqfireportingRoutingModule { }
