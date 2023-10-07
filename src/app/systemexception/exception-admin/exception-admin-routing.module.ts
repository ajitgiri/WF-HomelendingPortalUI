import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateApplicationProfileComponent } from './application-profile/create-application-profile/create-application-profile.component';
import { ListApplicationProfileComponent } from './application-profile/list-application-profile/list-application-profile.component';
import { ViewUpdateApplicationProfileComponent } from './application-profile/view-update-application-profile/view-update-application-profile.component';
import { CreateErrorCodeComponent } from './error-code-details/create-error-code/create-error-code.component';
import { ListOfErrorCodeComponent } from './error-code-details/list-of-error-code/list-of-error-code.component';
import { ViewErrorCodeComponent } from './error-code-details/view-error-code/view-error-code.component';
import { CreateResolutionStepsComponent } from './resolution-step-details/create-resolution-steps/create-resolution-steps.component';
import { ListOfResolutionStepsComponent } from './resolution-step-details/list-of-resolution-steps/list-of-resolution-steps.component';
import { ViewResolutionStepsComponent } from './resolution-step-details/view-resolution-steps/view-resolution-steps.component';


const routes: Routes = [
  {path:'', component: AdminHomeComponent},
  {path:'createApplicationProfile', component: CreateApplicationProfileComponent},
  {path:'listOfApplicationProfile', component: ListApplicationProfileComponent},
  {path:'viewApplicationProfile/:applicationId', component: ViewUpdateApplicationProfileComponent},
  {path:'createErrorCode', component: CreateErrorCodeComponent},
  {path:'listOfErrorCodes', component: ListOfErrorCodeComponent},
  {path:'viewErrorCode', component: ViewErrorCodeComponent},
  {path:'createResolutionSteps', component: CreateResolutionStepsComponent},
  {path:'listOfResolutionSteps', component: ListOfResolutionStepsComponent},
  {path:'viewResolutionSteps', component: ViewResolutionStepsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionAdminRoutingModule { }
