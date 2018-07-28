import { Injectable } from '@angular/core';
import {HttpService} from './http-service';
import { ConfigService} from './config-service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MenuModel} from '../models/menu-model';
 

@Injectable()
export class MenuService {

  private urlMenu: string;
  private _MenuArray: Array<MenuModel>;

  constructor(private httpService: HttpService,
              private configService: ConfigService) {
    this.urlMenu = this.configService.getUrlMenu();
  }

  public getMenuList(): Observable<any> {
    return this.httpService
               .get(this.urlMenu);
  }

  public vendorMenuList(vendId: string): Array<MenuModel> {
    return this._MenuArray.filter(menu => menu.vendorId == vendId);
  }  

  set menuArray(inputMenuArray: Array<MenuModel>) {
    this._MenuArray = inputMenuArray;
  }

  get menuArray(): Array<MenuModel> {
    return this._MenuArray;
  }

}