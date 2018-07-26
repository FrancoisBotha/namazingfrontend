import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConfigService {

  private urlVendor: string;
  private urlSpecial: string;
  private urlMenu: string;

  private ENV: string = 'DEVELOP';
  private srvAddress: string = 'http://localhost:18001/';

  // private ENV: string = 'PRODUCTION';
  // private srvAddress: string = 'https://www.namazing.app/';

  constructor() {

    console.log(this.ENV);

    this.urlVendor   = this.srvAddress + 'api/vendor';
    this.urlSpecial = this.srvAddress + 'api/vendor/special';
    this.urlMenu = this.srvAddress + 'api/vendor/menu';
  }

  public getSrvAddress(): string {
    return this.srvAddress;
  }

  public getUrlVendor(): string {
    return this.urlVendor;
  }

  public getUrlSpecial(): string {
    return this.urlSpecial;
  }

  public getUrlMenu(): string {
    return this.urlMenu;
  }


}