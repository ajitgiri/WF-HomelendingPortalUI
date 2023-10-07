import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DescionStatusUpdateComponent } from '../dialog/descion-status-update/descion-status-update.component';
import { UserProfileDetailsComponent } from '../dialog/user-profile-details/user-profile-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  openDecisionStatusDialog(): void {
    const dialogRef = this.dialog.open(DescionStatusUpdateComponent, {
     /* width: '450px',
      height: '500px',*/
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  openUserprofileDialog(){
    const dialogRef = this.dialog.open(UserProfileDetailsComponent);
  }

}
