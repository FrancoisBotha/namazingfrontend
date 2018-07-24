import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() {
     // Empty constructor
  }

  public valAlert(ac: any, msg: string): void  {
      let alert: any = ac.create({
          title: 'Error',
          subTitle: msg,
          buttons: ['OK'],
      });
      alert.present();
  }

    public genAlert(ac: any, title: string, msg: string): void  {
      let alert: any = ac.create({
          title: title,
          subTitle: msg,
          buttons: ['OK'],
      });
      alert.present();
  }


  public  valToast(tc: any, msg: string): void {
    let toast: any = tc.create({
      message: msg,
      duration: 4500,
      position: 'top',
    });

    toast.present();
  }



}