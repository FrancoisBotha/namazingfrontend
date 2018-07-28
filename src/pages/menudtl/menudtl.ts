import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuModel} from '../../models/menu-model';

/**
 * Generated class for the MenudtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menudtl',
  templateUrl: 'menudtl.html',
})
export class MenudtlPage {

  private menu: MenuModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu = this.navParams.data;    

  }

}
