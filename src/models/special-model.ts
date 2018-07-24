import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


interface Serializable<T> {
    deserialize(input: any): SpecialModel;
}

@Injectable()
export class SpecialModel implements Serializable<SpecialModel> {

  private _id: string;
  private _vendorId: string;
  private _specialNo: number;
  private _specialName: string;
  private _specialImgUrl: string;
  private _specialDesc: string;

  // constructor() {
  // }

  public deserialize(input: any): SpecialModel {

    this._id            = input.id;
    this._vendorId      = input.vendorId ;
    this._specialNo     = input.specialNo;
    this._specialName   = input.specialName;
    this._specialImgUrl = input.specialImgUrl;
    this._specialDesc   = input.specialDesc;

    return this;

  }

  get id(): string {
    return this._id;
  }

  get vendorId(): string {
    return this._vendorId;
  }

  get specialNo(): number {
    return this._specialNo;
  }

  get specialName(): string {
    return this._specialName;
  }

  get specialImgUrl(): string {
    return this._specialImgUrl;
  }

  get specialDesc(): string {
    return this._specialDesc;
  }

}