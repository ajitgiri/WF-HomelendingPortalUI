import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { SystemExceptionApplicationProfileService } from 'src/app/systemexception/service/systemExceptionApplicationProfile/system-exception-application-profile.service';

@Component({
  selector: 'app-view-update-application-profile',
  templateUrl: './view-update-application-profile.component.html',
  styleUrls: ['./view-update-application-profile.component.css']
})
export class ViewUpdateApplicationProfileComponent implements OnInit {

  applicationKey: string;
  private sub: any;
  applicationProfileDetails: any = {};

  constructor(private _activateRoute: ActivatedRoute,
    private _sysExcepAppProfileSvc : SystemExceptionApplicationProfileService,
    private _router: Router) { }

  ngOnInit(): void {
    this.sub = this._activateRoute.params.subscribe(params => {
      this.applicationKey = params['applicationId'];
      // +params['applicationId']; (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });

   this.getApplicationProfilesDetailsByApplicationKey(this.applicationKey);
  }

  getApplicationProfilesDetailsByApplicationKey(SubApplicationId : string){
    this._sysExcepAppProfileSvc.getSewApplicationProfileBySubApplicationId(SubApplicationId).subscribe(data => {
      this.applicationProfileDetails = data;
    });
  }

  populateDetailsForUpdate(applicationKey : string){
    this._router.navigate(["home/systemexception/createApplicationProfile"],{
      state: {
        applicationKey: applicationKey
      }
    })
  }

}
