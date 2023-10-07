import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-service-pipeline',
  templateUrl: './decision-service-pipeline.component.html',
  styleUrls: ['./decision-service-pipeline.component.css']
})
export class DecisionServicePipelineComponent implements OnInit {

  messageHomeOwner: String = "Value from ( PARENT Component )!";
  constructor() { }

  ngOnInit(): void {
  }

}
