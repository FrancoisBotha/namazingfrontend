import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VendorModel } from '../../models/vendor-model';

@IonicPage()
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {

  homePage:any = HomePage;

  private vendor: VendorModel;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public appCtrl: App) {

    this.vendor = this.navParams.data;          
  }

  onGoHome() {
    this.appCtrl.getRootNav().setRoot(this.homePage);
  }

  buttonClick() {
    this.appCtrl.getRootNav().setRoot(this.homePage);
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  }

}
