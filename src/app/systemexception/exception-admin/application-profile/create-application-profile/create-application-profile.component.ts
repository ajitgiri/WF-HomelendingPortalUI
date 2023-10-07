import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemExceptionApplicationProfileService } from 'src/app/systemexception/service/systemExceptionApplicationProfile/system-exception-application-profile.service';

@Component({
  selector: 'app-create-application-profile',
  templateUrl: './create-application-profile.component.html',
  styleUrls: ['./create-application-profile.component.css']
})

export class CreateApplicationProfileComponent implements OnInit {

  regAppProfileForm: FormGroup;
  submitted = false;
  displayMessage:string;
  isCreate: boolean = true;
  generatedApplicationKey: string;
  isSubApplicationIdExist: boolean;
  applicationProfileDetails: any = {};

  phoneNumberValidator: ValidatorFn =Validators.pattern('^[0-9]*$')

  constructor(private formBuilder: FormBuilder,
    private _systemExceptionAppProfileService: SystemExceptionApplicationProfileService,
    private _router: Router) { }

  ngOnInit(): void {
    this.initializeReactiveCreateAppProfileFrom();
    if(history.state?.applicationKey){
      this.getAppProfileDetailsByApplicationKey(history.state?.applicationKey);
      this.isCreate = false;
    }
  }

  initializeReactiveCreateAppProfileFrom(){
    this.regAppProfileForm = this.formBuilder.group({
      lineOfBusiness: ['',Validators.required],
      applicationId: ['', Validators.required],
      subApplicationId: ['', Validators.required,this.isSubApplicationIdExist],
      ca: [''],
      description: [''],
      expectedExceptionVolume:  ['', [this.phoneNumberValidator]],
      appOneLink:  [''],
      agileRegistryLink:  [''],
      applicationUrl: [''],
      techLeadName: [''],
      techLeadEmail: [''],
      techLeadPhone: ['', [this.phoneNumberValidator]],
      teamName: [''],
      teamMail: [''],
      productOwnerName:  [''],
      productOwnerPhone:  ['', [this.phoneNumberValidator]],
      productOwnerEmail:  [''],
      everBridgeNotificationGroup:  [''],
      integrationModal:  ['']
    })
  }

  createApplicationProfile(){
    let applicationProfileDetails: any = {};
    applicationProfileDetails = {
      'lineOfBusiness': this.regAppProfileForm.controls['lineOfBusiness'].value,
      'applicationId': this.regAppProfileForm.controls['applicationId'].value,
      'subApplicationId': this.regAppProfileForm.controls['subApplicationId'].value,
      'ca': this.regAppProfileForm.controls['ca'].value,
      'description': this.regAppProfileForm.controls['description'].value,
      'expectedExceptionVolume': this.regAppProfileForm.controls['expectedExceptionVolume'].value,
      'appOneLink':  this.regAppProfileForm.controls['appOneLink'].value,
      'agileRegistryLink':  this.regAppProfileForm.controls['agileRegistryLink'].value,
      'applicationUrl': this.regAppProfileForm.controls['applicationUrl'].value,
      'techLeadName': this.regAppProfileForm.controls['techLeadName'].value,
      'techLeadEmail': this.regAppProfileForm.controls['techLeadEmail'].value,
      'techLeadPhone': this.regAppProfileForm.controls['techLeadPhone'].value,
      'teamName': this.regAppProfileForm.controls['teamName'].value,
      'teamMail': this.regAppProfileForm.controls['teamMail'].value,
      'productOwnerName':  this.regAppProfileForm.controls['productOwnerName'].value,
      'productOwnerPhone':  this.regAppProfileForm.controls['productOwnerPhone'].value,
      'productOwnerEmail':  this.regAppProfileForm.controls['productOwnerEmail'].value,
      'everBridgeNotificationGroup':  this.regAppProfileForm.controls['everBridgeNotificationGroup'].value
    }

    if(this.isCreate){
      applicationProfileDetails.createdUser = "SYS0011";
      applicationProfileDetails.createdDate = new Date();
      this._systemExceptionAppProfileService.createApplicationProfile(applicationProfileDetails).subscribe(data =>{
      this._router.navigate(['/home/systemexception/listOfApplicationProfile']);
      })
    }else{
      applicationProfileDetails.applicationKey = this.generatedApplicationKey;
      applicationProfileDetails.updatedUser = "SYS0011";
      applicationProfileDetails.updatedDate = new Date();
      this._systemExceptionAppProfileService.updateApplicationProfile(applicationProfileDetails).subscribe(data =>{
        this._router.navigate(['/home/systemexception/listOfApplicationProfile'],{
          state:{
            message: "Application Profile Details Updated Success Fully"
          }
        });
        })
    }
  }

  getAppProfileDetailsByApplicationKey(applicationKey : string){
    // call BackendAPI to get the App Profile details for passed applicationKey
    this._systemExceptionAppProfileService.getApplicationProfileByApplicationKey(applicationKey).subscribe(response => {
    this.applicationProfileDetails = response;
      this.generatedApplicationKey = this.applicationProfileDetails.applicationKey;
      this.regAppProfileForm.patchValue(
        {
        'lineOfBusiness': this.applicationProfileDetails.lineOfBusiness,
        'applicationId': this.applicationProfileDetails.applicationId,
        'subApplicationId': this.applicationProfileDetails.subApplicationId,
        'ca': this.applicationProfileDetails.ca,
        'description': this.applicationProfileDetails.description,
        'expectedExceptionVolume': this.applicationProfileDetails.expectedExceptionVolume,
        'appOneLink':  this.applicationProfileDetails.appOneLink,
        'agileRegistryLink':  this.applicationProfileDetails.agileRegistryLink,
        'applicationUrl': this.applicationProfileDetails.applicationUrl,
        'techLeadName': this.applicationProfileDetails.techLeadName,
        'techLeadEmail': this.applicationProfileDetails.techLeadEmail,
        'techLeadPhone': this.applicationProfileDetails.techLeadPhone,
        'teamName': this.applicationProfileDetails.teamName,
        'teamMail': this.applicationProfileDetails.teamMail,
        'productOwnerName':  this.applicationProfileDetails.productOwnerName,
        'productOwnerPhone':  this.applicationProfileDetails.productOwnerPhone,
        'productOwnerEmail':  this.applicationProfileDetails.productOwnerEmail,
        'everBridgeNotificationGroup':  this.applicationProfileDetails.everBridgeNotificationGroup
      }
    )
  });
 }
}
