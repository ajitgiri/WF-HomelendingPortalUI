import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysExceptionCustomColapsTableComponent } from './sys-exception-custom-colaps-table/sys-exception-custom-colaps-table.component';

const routes: Routes = [
  {path:'',component: SysExceptionCustomColapsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysExceptionCustomRoutingModule { }
