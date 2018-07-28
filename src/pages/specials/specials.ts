import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VendorModel } from '../../models/vendor-model';
import {SpecialModel} from '../../models/special-model';
import {SpecialService} from '../../services/special-service';


@IonicPage()
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {

  homePage:any = HomePage;

  private vendor: VendorModel;
  private specialList: Array<SpecialModel>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private specialService: SpecialService,
              public appCtrl: App) {

    this.vendor = this.navParams.data;    
    this.specialList = this.specialService.vendorSpecialList(this.vendor.id);      
  }

  onGoHome() {
    this.appCtrl.getRootNav().setRoot(this.homePage);
  }

  buttonClick() {
    this.appCtrl.getRootNav().setRoot(this.homePage);
  }  


}
