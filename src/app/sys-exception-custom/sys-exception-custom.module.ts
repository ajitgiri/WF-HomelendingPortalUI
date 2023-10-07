import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysExceptionCustomRoutingModule } from './sys-exception-custom-routing.module';
import { SysExceptionCustomColapsTableComponent } from './sys-exception-custom-colaps-table/sys-exception-custom-colaps-table.component';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';



@NgModule({
  declarations: [SysExceptionCustomColapsTableComponent],
  imports: [
    CommonModule,
    SysExceptionCustomRoutingModule,
    CommonmaterialModule
  ]
})
export class SysExceptionCustomModule { }
