import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../shared/configuration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  locationName: string = "";

  constructor(private configurationService: ConfigurationService) {
    this.configurationService = configurationService;
  }

  ngOnInit(): void {
    this.locationName = this.configurationService.locationName;
  }
}
