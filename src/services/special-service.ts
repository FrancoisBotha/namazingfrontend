import { Injectable } from '@angular/core';
import {HttpService} from './http-service';
import { ConfigService} from './config-service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SpecialModel} from '../models/special-model';
 

@Injectable()
export class SpecialService {

  private urlSpecial: string;
  private _specialArray: Array<SpecialModel>;

  constructor(private httpService: HttpService,
              private configService: ConfigService) {
    this.urlSpecial = this.configService.getUrlSpecial();
  }

  public getSpecialList(): Observable<any> {
    return this.httpService
               .get(this.urlSpecial);
  }

  set specialArray(inputSpecialArray: Array<SpecialModel>) {
    this._specialArray = inputSpecialArray;
  }

  get specialArray(): Array<SpecialModel> {
    return this._specialArray;
  }

}