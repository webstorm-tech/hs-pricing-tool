import { Injectable } from '@angular/core';
import { IConfiguration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private config: IConfiguration;

  constructor() {
    this.config = { "locationName": "Pottstown, PA" }
  }

  get locationName() {
    return this.config.locationName;
  }

  get setupComplete() {
    return true;
  }
}
