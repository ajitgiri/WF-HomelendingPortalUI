import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hazard-home',
  templateUrl: './hazard-home.component.html',
  styleUrls: ['./hazard-home.component.css']
})
export class HazardHomeComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
