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
  private grid: Array<Array<string>>; //array of arrays

  private vendorList: Array<VendorModel>;


  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private vendorService: VendorService,
              private helperService: HelperService,
              private loadingController: LoadingController,
              private alertCtrl: AlertController) {

                this.tabsPage = TabsPage;
                this.params = { id: 42 };
                this.images = [
                'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
                ];
                this.grid = Array(Math.ceil(this.images.length/2)); //MATHS!
                
                this.vendorList = [];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.loader = this.loadingController.create({
        content: 'Please wait...',
      });

      this.loader.present();

      this.vendorService.getVendorList()
      .subscribe(
        vendordata => {
          this.loader.dismiss().then(() => {
            // Populate bus Data
            for (let vendorObj of vendordata) {
              let instance: VendorModel = new VendorModel().deserialize(vendorObj);
              this.vendorList.push(instance);
            }
            this.vendorService.vendorArray = this.vendorList;
            console.log('VENDORS...');
            console.dir(this.vendorList);
              // TILES
              let rowNum = 0; //counter to iterate over the rows in the grid
          
              for (let i = 0; i < this.images.length; i+=2) { //iterate images
            
                this.grid[rowNum] = Array(2); //declare two elements per row
            
                if (this.images[i]) { //check file URI exists
                  this.grid[rowNum][0] = this.images[i] //insert image
                }
            
                if (this.images[i+1]) { //repeat for the second image
                  this.grid[rowNum][1] = this.images[i+1]
                }
            
                rowNum++; //go on to the next row
              }
          });
        },
        err => {
          this.loader.dismiss().then(() => {
            let svrMsg: string  = '';
            svrMsg = 'Error occurred in contacting the server';
            this.helperService.valAlert(this.alertCtrl, svrMsg);
          });
        }
        // () => {}
      );

    });

  }
}