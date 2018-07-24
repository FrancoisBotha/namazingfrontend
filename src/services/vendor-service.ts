import { Injectable } from '@angular/core';
import {HttpService} from './http-service';
import { ConfigService} from './config-service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {VendorModel} from '../models/vendor-model';

/*
  Generated class for the BusService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class VendorService {

  private urlVendor: string;
  private _vendorArray: Array<VendorModel>;

  constructor(private httpService: HttpService,
              private configService: ConfigService) {
    this.urlVendor = this.configService.getUrlVendor();
  }

  public getVendorList(): Observable<any> {
    return this.httpService
               .get(this.urlVendor);
  }

  set vendorArray(inputVendorArray: Array<VendorModel>) {
    this._vendorArray = inputVendorArray;
  }

  get vendorArray(): Array<VendorModel> {
    return this._vendorArray;
  }

}