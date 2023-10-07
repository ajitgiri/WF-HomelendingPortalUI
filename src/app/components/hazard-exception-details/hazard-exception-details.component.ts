import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface UserData {
  loanNumber: Number;
  documentId : string;
  decisionStatus : string;
  latestDecisionDate : string;
  followupDueDate : string;
  assignTo: string;
}

const ELEMENT_DATA: UserData[] = [
  {loanNumber: 5300308, documentId: 'Hydrogen', decisionStatus: 'Exception', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate:  '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Helium', decisionStatus:'Rejected', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Lithium', decisionStatus:'Exception', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Beryllium', decisionStatus:'Exception', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Boron', decisionStatus:'Exception', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Carbon', decisionStatus:'Approved', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Nitrogen', decisionStatus:'Exception', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Oxygen', decisionStatus:'Approved', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Fluorine', decisionStatus:'Rejected', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
  {loanNumber: 5300308, documentId: 'Neon', decisionStatus:'Exception', latestDecisionDate: '2020-11-16T18:58:42.370+00:00', followupDueDate: '2020-11-16T18:58:42.370+00:00', assignTo: ''},
];


@Component({
  selector: 'app-hazard-exception-details',
  templateUrl: './hazard-exception-details.component.html',
  styleUrls: ['./hazard-exception-details.component.css']
})
export class HazardExceptionDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['loanNumber', 'documentId', 'decisionStatus', 'latestDecisionDate', 'followupDueDate', 'assignTo'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Autocomplete
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  //END 

  constructor(private router : Router) {
     
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

    //
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getExceptionData(loanNumber:number){
    alert (loanNumber);
    this.router.navigate(['home/decisionServicePipelineComponent']);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
