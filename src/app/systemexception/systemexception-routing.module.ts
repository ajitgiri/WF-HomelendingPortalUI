import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExceptionDetailsComponent } from './exception-details/exception-details.component';
import { ExceptionPipelineComponent } from './exception-pipeline/exception-pipeline.component';
import { SystemExceptionHomeComponent } from './system-exception-home/system-exception-home.component';

const routes: Routes = [
  {path:'',component: SystemExceptionHomeComponent},
  {path:'exceptionPipeLine', component: ExceptionPipelineComponent},
  {path:'exceptionDetails', component: ExceptionDetailsComponent},
  {path:'exceptionAdmin', loadChildren: () => import('../systemexception/exception-admin/exception-admin.module').then(m => m.ExceptionAdminModule) },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemexceptionRoutingModule { }
