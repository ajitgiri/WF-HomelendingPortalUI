import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
 
  position: number;
  story: String;
  dev: number [];
  uat: number [];
  sit: number [];
  status: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,story: 'LCXX-651', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 2,story: 'LCXX-653', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 3,story: 'LCXX-655', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 4,story: 'LCXX-652', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 5,story: 'LCXX-656', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 6,story: 'LCXX-657', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 7,story: 'LCXX-659', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 8,story: 'LCXX-658', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 9,story: 'LCXX-661', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
  {position: 10 ,story: 'LCXX-660', dev:[30, 20, 50], uat:[30, 20, 50], sit:[30, 20, 50], status:'Passed'},
];

@Component({
  selector: 'app-pqfireporting-home',
  templateUrl: './pqfireporting-home.component.html',
  styleUrls: ['./pqfireporting-home.component.css']
})
export class PqfireportingHomeComponent implements AfterViewInit {

  displayedColumns: string[] = ['position','story','devSmoke', 'devFunctional', 'devRegression', 'uatSmoke', 'uatFunctional', 'uatRegression','sitSmoke','sitFunctional','sitRegression','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
