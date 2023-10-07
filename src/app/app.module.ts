import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LogginComponent } from './components/loggin/loggin.component';
import { HomeComponent } from './components/home/home.component';
import { DecisionServicePipelineComponent } from './components/decision-service-pipeline/decision-service-pipeline.component';
import { HazardFailedEvaluationComponent } from './components/hazard-failed-evaluation/hazard-failed-evaluation.component';
import { HazardPassedEvaluationComponent } from './components/hazard-passed-evaluation/hazard-passed-evaluation.component';
import { HazardNotesComentsComponent } from './components/hazard-notes-coments/hazard-notes-coments.component';
import { HazardLoanInformationsComponent } from './components/hazard-loan-informations/hazard-loan-informations.component';
import { HazardPolicyAgencyInformationsComponent } from './components/hazard-policy-agency-informations/hazard-policy-agency-informations.component';
import { HazardHomeOwnerDeclarationsComponent } from './components/hazard-home-owner-declarations/hazard-home-owner-declarations.component';
import { DescionStatusUpdateComponent } from './components/dialog/descion-status-update/descion-status-update.component';
import { UserProfileDetailsComponent } from './components/dialog/user-profile-details/user-profile-details.component';
import { HazardExceptionDetailsComponent } from './components/hazard-exception-details/hazard-exception-details.component';
import { HazardHomeComponent } from './components/hazard-home/hazard-home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';

import { VolumeregulatorModule } from './volumeregulator/volumeregulator.module';
import { SystemexceptionModule } from './systemexception/systemexception.module';
import { PqfireportingModule } from './pqfireporting/pqfireporting.module';
import { RdmsModule } from './rdms/rdms.module';
import { SysExceptionCustomModule } from './sys-exception-custom/sys-exception-custom.module';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { CommonmaterialModule } from './commonmaterial/commonmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LogginComponent,
    HomeComponent,
    DecisionServicePipelineComponent,
    HazardFailedEvaluationComponent,
    HazardPassedEvaluationComponent,
    HazardNotesComentsComponent,
    HazardLoanInformationsComponent,
    HazardPolicyAgencyInformationsComponent,
    HazardHomeOwnerDeclarationsComponent,
    DescionStatusUpdateComponent,
    UserProfileDetailsComponent,
    HazardExceptionDetailsComponent,
    HazardHomeComponent,
    AdminDashboardComponent,
    FlexLayoutComponent,
    UploadCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    VolumeregulatorModule,
    SystemexceptionModule,
    PqfireportingModule,
    RdmsModule,
    SysExceptionCustomModule,
    CommonmaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
