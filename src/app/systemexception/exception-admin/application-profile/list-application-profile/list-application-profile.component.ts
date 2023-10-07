import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { SystemExceptionApplicationProfileService } from 'src/app/systemexception/service/systemExceptionApplicationProfile/system-exception-application-profile.service';

@Component({
  selector: 'app-list-application-profile',
  templateUrl: './list-application-profile.component.html',
  styleUrls: ['./list-application-profile.component.css']
})
export class ListApplicationProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['applicationKey', 'applicationId', 'subapplicationId', 'teamName', 'productOwnerName', 'techLeadName', 'createdUser', 'createdDate', 'actions'];
  dataSource :any;
  successMessage:string = null;
  isSuccessMessage:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _router: Router, private _sysExcepAppProfileSvc : SystemExceptionApplicationProfileService){
  }

  ngOnInit(){
    if(history.state?.message){
      this.successMessage = history.state?.message;
      this.isSuccessMessage = true;
      this.setMessageTimeOut();
    }
  }

  ngAfterViewInit() {
    this.getApplicationProfileList();
    this.dataSource.paginator = this.paginator;
  }

  getApplicationProfileList(){
   this._sysExcepAppProfileSvc.getApplicationProfiles().subscribe(response => {
     this.dataSource = response;
   })
  }

  viewApplicationProfileDetails(applicationId: string){
    this._router.navigate(["home/systemexception/viewApplicationProfile", applicationId]);
  }
  
  setMessageTimeOut(){
    setTimeout(() => {
      this.isSuccessMessage = false;
    }, 10000);
  }

}
