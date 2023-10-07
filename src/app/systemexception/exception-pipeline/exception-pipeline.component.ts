import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ExceptionPipelineService } from '../service/exceptionPipeline/exception-pipeline.service';

@Component({
  selector: 'app-exception-pipeline',
  templateUrl: './exception-pipeline.component.html',
  styleUrls: ['./exception-pipeline.component.css']
})
export class ExceptionPipelineComponent implements OnInit {

  totalElementsCounts: number =0;
  defaultPage : number = 0;
  defaultPageSize: number = 5;
  pageSizeValue : number ;
  exceptionPipelineData : any =[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['select', 'Exception Identifier', 'Error Message', 'Exception Type', 'Component', 'assignedUser', 'Created Date'];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel(true, []);

  constructor(private exceptionPipelineSvc: ExceptionPipelineService) { }

  ngOnInit(): void {
    let searchCriteris ={
      "actionConfirmationId": "",
      "assignedUser": "",
      "exceptionCode": "",
      "exceptionIdentifier": "",
      "fromTime": "",
      "hiddenFlag": "",
      "isDiscardedException": "",
      "page":this.defaultPage,
      "pageSize": this.defaultPageSize,
      "resolutionCode": "",
      "searchText": "",
      "senderApplicationId": "",
      "senderSubApplicationId": "",
      "status": "Open",
      "toTime": ""
  }
    
    this.searchAndLoadPipelineData(searchCriteris);
    this.dataSource.paginator = this.paginator;
  }
  
  ngAfterViewInit() {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    /** */
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(x => {this.selection.select(x)});
        
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.exceptionidentifier + 1}`;
  }

  searchAndLoadPipelineData(searchCriteris:any){
   
  this.exceptionPipelineSvc.searchSystemExceptionDetailsWithPagination(searchCriteris).subscribe (response =>{

    this.exceptionPipelineData = response.body;
    this.dataSource.data = this.exceptionPipelineData.content;
  //  console.log(response.body.totalElements+" ---- >> "+ this.exceptionPipelineData.size); 
    this.paginator.pageSize = this.exceptionPipelineData.size;
    this.paginator.length = response.body.totalElements;
  });
  }
  
  // NOT : Required with below method we can achive same
  pageChangeEventTop(event?:PageEvent) {
   
 let searchCriteris ={
  "actionConfirmationId": "",
  "assignedUser": "",
  "exceptionCode": "",
  "exceptionIdentifier": "",
  "fromTime": "",
  "hiddenFlag": "",
  "isDiscardedException": "",
  "page": event.pageIndex,
  "pageSize": event.pageSize,
  "resolutionCode": "",
  "searchText": "",
"senderApplicationId": "",
  "senderSubApplicationId": "",
  "status": "Open",
  "toTime": ""
}
  this.searchAndLoadPipelineData(searchCriteris);
  this.paginator.pageIndex = event.pageIndex;
  this.paginator.pageSize = event.pageSize;
    
  }

  pageChangeEventButtom(event?:PageEvent) {
    if(this.paginator){
    //  this.paginator.pageSize = event.pageSize;
    }
   // this.pageSizeValue = event.pageSize;
  // this.paginator.pageIndex = event.pageIndex;
  // this.paginator.pageSize = event.pageSize;
  let searchCriteris ={
    "actionConfirmationId": "",
    "assignedUser": "",
    "exceptionCode": "",
    "exceptionIdentifier": "",
    "fromTime": "",
    "hiddenFlag": "",
    "isDiscardedException": "",
    "page": event.pageIndex,
    "pageSize": event.pageSize,
    "resolutionCode": "",
    "searchText": "",
    "senderApplicationId": "",
    "senderSubApplicationId": "",
    "status": "Open",
    "toTime": ""
}
    this.searchAndLoadPipelineData(searchCriteris);
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    
  }
}