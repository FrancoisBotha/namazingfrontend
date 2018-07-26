import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {VendorModel} from '../models/vendor-model';
import {VendorService} from '../services/vendor-service';
import {HelperService} from '../services/helper-service';
import {  LoadingController, AlertController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  private errMsg: string;

  private params: Object;
  private tabsPage: any;
  private loader: any;

  private images: Array<string>;  



  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private vendorService: VendorService,
              private helperService: HelperService,
              private loadingController: LoadingController,
              private alertCtrl: AlertController) {

                this.tabsPage = TabsPage;
                // this.params = { id: 42 };
                // this.images = [
                // 'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                // 'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                // 'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                // 'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                // ];
                // this.grid = Array(Math.ceil(this.images.length/2)); //MATHS!
                
                // this.vendorList = [];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });

  }
}