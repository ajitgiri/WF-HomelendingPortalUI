import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hazard-home-owner-declarations',
  templateUrl: './hazard-home-owner-declarations.component.html',
  styleUrls: ['./hazard-home-owner-declarations.component.css']
})
export class HazardHomeOwnerDeclarationsComponent implements OnInit {

  @Input()
  messageHomeOwner
  
  constructor() { }

  ngOnInit(): void {
    this.messageHomeOwner = this.messageHomeOwner+" \n Value From ( CHILD COMPONENT ) !!";
  }

}
