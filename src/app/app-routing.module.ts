import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { DescionStatusUpdateComponent } from './components/dialog/descion-status-update/descion-status-update.component';
import { DecisionServicePipelineComponent } from './components/decision-service-pipeline/decision-service-pipeline.component';
import { HazardExceptionDetailsComponent } from './components/hazard-exception-details/hazard-exception-details.component';
import { HazardHomeComponent } from './components/hazard-home/hazard-home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';

const routes: Routes = [
  {path:'', component: LogginComponent},
  {path:'logout', component: LogginComponent},
  {path:'home', component: HomeComponent,
    children:[
      {path:'decisionServicePipelineComponent', component: DecisionServicePipelineComponent},
      {path:'hazardExceptionPage', component:HazardExceptionDetailsComponent},
      {path:'admindashboard', component: AdminDashboardComponent},
      {path:'hazard', component:HazardHomeComponent},
      { path: 'volumeregulator', loadChildren: () => import('././volumeregulator/volumeregulator.module').then(m => m.VolumeregulatorModule) },
      { path: 'systemexception', loadChildren: () => import('././systemexception/systemexception.module').then(m => m.SystemexceptionModule) },
      { path: 'pqfireporting', loadChildren: () => import('././pqfireporting/pqfireporting.module').then(m => m.PqfireportingModule) },
      { path: 'rdms', loadChildren: () => import('././rdms/rdms.module').then(m => m.RdmsModule) },
      { path: 'systemexceptionCust', loadChildren: () => import('././sys-exception-custom/sys-exception-custom.module').then(m => m.SysExceptionCustomModule) },
      { path:'flex', component:FlexLayoutComponent},
      { path:'csv', component: UploadCsvComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
