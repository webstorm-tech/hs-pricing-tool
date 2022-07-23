import { Component, OnInit } from '@angular/core';
import { IConfiguration } from '../shared/configuration';
import { ConfigurationService } from '../shared/configuration.service';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  providers: [ConfigurationService]
})
export class SetupComponent implements OnInit {
  originalConfiguration: IConfiguration;
  configuration: IConfiguration;

  constructor(private configurationService: ConfigurationService) {
    this.originalConfiguration = this.configurationService.getConfiguration();

    this.configuration = { ...this.originalConfiguration }
  }

  ngOnInit(): void {
  }

}
