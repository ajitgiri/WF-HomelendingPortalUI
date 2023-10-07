import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemExceptionHomeComponent } from './system-exception-home/system-exception-home.component';
import { ExceptionPipelineComponent } from './exception-pipeline/exception-pipeline.component';
import { ExceptionDetailsComponent } from './exception-details/exception-details.component';

import { SystemexceptionRoutingModule } from './systemexception-routing.module';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';
import { ExceptionPipelineService } from './service/exceptionPipeline/exception-pipeline.service';
import { ExceptionAdminModule } from './exception-admin/exception-admin.module';


@NgModule({
  declarations: [SystemExceptionHomeComponent, ExceptionPipelineComponent, ExceptionDetailsComponent],
  imports: [
    CommonModule,
    SystemexceptionRoutingModule,
    CommonmaterialModule,
    ExceptionAdminModule
    
  ] ,
  providers: [ExceptionPipelineService]
})
export class SystemexceptionModule { } 
