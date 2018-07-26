import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VendorModel } from '../../models/vendor-model';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  }

}
