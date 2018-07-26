import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


interface Serializable<T> {
    deserialize(input: any): VendorModel;
}

@Injectable()
export class VendorModel implements Serializable<VendorModel> {

  private _id: string;
  private _vendorCde: string;
  private _num: number;
  private _vendorName: string;
  private _vendorLogoUrl: string;

  // constructor() {
  // }

  public deserialize(input: any): VendorModel {

    this._id            = input.id;
    this._vendorCde     = input.vendorCde;
    this._num           = input.num;
    this._vendorName    = input.vendorName;
    this._vendorLogoUrl = input.vendorLogoUrl;

    return this;

  }

  get id(): string {
    return this._id;
  }

  get vendorCde(): string {
    return this._vendorCde;
  }

  get num(): number {
    return this._num;
  }

  get vendorName(): string {
    return this._vendorName;
  }

  get vendorLogoUrl(): string {
    return this._vendorLogoUrl;
  }

}