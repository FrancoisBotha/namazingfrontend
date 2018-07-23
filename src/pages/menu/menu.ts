import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage:any = HomePage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public appCtrl: App) {
  }

  onGoHome() {
    this.appCtrl.getRootNav().setRoot(this.homePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  }

}
