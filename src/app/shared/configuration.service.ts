import { Injectable } from '@angular/core';
import { IConfiguration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configuration: IConfiguration;

  constructor() {
    this.configuration = { "locationName": "" }
  }

  get locationName() {
    return this.configuration.locationName;
  }

  get setupComplete() {
    return false;
  }

  getConfiguration():IConfiguration {
    return this.configuration;
  }
}
