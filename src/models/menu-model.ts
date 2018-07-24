import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


interface Serializable<T> {
    deserialize(input: any): menuModel;
}

@Injectable()
export class menuModel implements Serializable<menuModel> {

  private _id: string;
  private _vendorId: string;
  private _menuNo: number;
  private _menuName: string;
  private _menuImgUrl: string;
  private _menuDesc: string;

  // constructor() {
  // }

  public deserialize(input: any): menuModel {

    this._id         = input.id;
    this._vendorId   = input.vendorId ;
    this._menuNo     = input.menuNo;
    this._menuName   = input.menuName;
    this._menuImgUrl = input.menuImgUrl;
    this._menuDesc   = input.menuDesc;

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

}