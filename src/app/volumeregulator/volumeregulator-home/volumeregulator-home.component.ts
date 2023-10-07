import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface RuleDetails {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: RuleDetails[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-volumeregulator-home',
  templateUrl: './volumeregulator-home.component.html',
  styleUrls: ['./volumeregulator-home.component.css']
})
export class VolumeregulatorHomeComponent implements OnInit {
  myControl = new FormControl(); 
  options: string[] = ['Hazard Insurance', 'Property Insurance', 'Flood Insurance'];
  filteredOptions: Observable<string[]>;

  // For Table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<RuleDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router : Router) {
     
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  goToVolumeDetails(){
    alert("navigate to Volume Regulator Details Page");
    this.router.navigate(['/home/volumeregulator/volumeDetails']);
  }

  goToVolumeRegulatorDetailsList(){
    alert("navigate to Volume Regulator List Page");
    this.router.navigate(['/home/volumeregulator/volumeRegulatorList']);
  }
  

}
