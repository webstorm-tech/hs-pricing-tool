import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  averageMaterialCost: number = 0;
  averageProductCost: number = 0;
  averageProductMarkup: number = 0;
  totalMaterials: number = 0;
  totalProducts: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
