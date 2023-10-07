import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DescionStatusUpdateComponent } from '../dialog/descion-status-update/descion-status-update.component';
import { UserProfileDetailsComponent } from '../dialog/user-profile-details/user-profile-details.component';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 5}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
      
  }

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
  
  showSideComponent(){
    alert("Show Side compomnent !!");
  }
  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
   }
 
   shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


}
