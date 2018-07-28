import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MenudtlPage } from '../menudtl/menudtl';
import { VendorModel } from '../../models/vendor-model';
import {MenuModel} from '../../models/menu-model';
import {MenuService} from '../../services/menu-service';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage:any = HomePage;
  menudtlPage:any = MenudtlPage;
  private menuList: Array<MenuModel>;

  private vendor: VendorModel;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private menuService: MenuService,
              public appCtrl: App) {

    this.vendor = this.navParams.data;       
    
    this.menuList = this.menuService.menuArray;
    this.menuList = this.menuService.vendorMenuList(this.vendor.id);    
  }

  onGoHome() {
    this.appCtrl.getRootNav().setRoot(this.homePage);
  }

}
