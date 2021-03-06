import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


interface Serializable<T> {
    deserialize(input: any): MenuModel;
}

@Injectable()
export class MenuModel implements Serializable<MenuModel> {

  private _id: string;
  private _vendorId: string;
  private _menuNo: number;
  private _menuName: string;
  private _menuImgUrl: string;
  private _menuDesc: string;
  private _menuAmt: number;

  // constructor() {
  // }

  public deserialize(input: any): MenuModel {

    this._id         = input.id;
    this._vendorId   = input.vendorId ;
    this._menuNo     = input.menuNo;
    this._menuName   = input.menuName;
    this._menuImgUrl = input.menuImgUrl;
    this._menuDesc   = input.menuDesc;
    this._menuAmt   = input.menuAmt;

    return this;

  }

  get id(): string {
    return this._id;
  }

  get vendorId(): string {
    return this._vendorId;
  }

  get menuNo(): number {
    return this._menuNo;
  }

  get menuName(): string {
    return this._menuName;
  }

  get menuImgUrl(): string {
    return this._menuImgUrl;
  }

  get menuDesc(): string {
    return this._menuDesc;
  }

  get menuAmt(): number {
    return this._menuAmt;
  }

}