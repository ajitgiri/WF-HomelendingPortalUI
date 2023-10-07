import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionAdminRoutingModule } from './exception-admin-routing.module';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonmaterialModule } from 'src/app/commonmaterial/commonmaterial.module';

@NgModule({
  declarations: [
      AdminHomeComponent, 
      CreateApplicationProfileComponent, 
      ListApplicationProfileComponent, 
      ViewUpdateApplicationProfileComponent, 
      CreateErrorCodeComponent, 
      ListOfErrorCodeComponent, 
      ViewErrorCodeComponent, 
      CreateResolutionStepsComponent, 
      ListOfResolutionStepsComponent, 
      ViewResolutionStepsComponent
    ],
  imports: [
    CommonModule,
    ExceptionAdminRoutingModule,
    CommonmaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ExceptionAdminModule { }
