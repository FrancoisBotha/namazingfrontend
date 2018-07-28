import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { InfoPage } from '../info/info';
import {VendorModel} from '../../models/vendor-model';
import {SpecialModel} from '../../models/special-model';
import {MenuModel} from '../../models/menu-model';
import {VendorService} from '../../services/vendor-service';
import {SpecialService} from '../../services/special-service';
import {MenuService} from '../../services/menu-service';
import {HelperService} from '../../services/helper-service';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private errMsg: string;

  private params: Object;
  private tabsPage: any;
  private infoPage: any;
  private loader: any;

  private images: Array<string>;  
  private grid: Array<Array<VendorModel>>; //array of arrays

  private vendorList: Array<VendorModel>;
  private specialList: Array<SpecialModel>;
  private menuList: Array<MenuModel>;

  constructor(private vendorService: VendorService,
              private specialService: SpecialService,
              private menuService: MenuService,
              private nav: NavController,
              private navParams: NavParams,
              private helperService: HelperService,
              private toastController: ToastController,
              private loadingController: LoadingController,
              private alertCtrl: AlertController){

    this.tabsPage = TabsPage;
    this.infoPage = InfoPage;

    this.vendorList = [];
    this.specialList = [];
    this.menuList = [];

  }

  onGoInfo() {
    this.nav.push(this.infoPage);
  }


  ionViewDidLoad() {

    if (!this.vendorService.vendorArray
        || this.vendorService.vendorArray.length == 0) {

      this.loader = this.loadingController.create({
        content: 'Loading Vendors...',
      });
  
      this.loader.present();
  
      this.vendorService.getVendorList()
      .subscribe(
        vendordata => {
          this.loader.dismiss().then(() => {
  
            for (let vendorObj of vendordata) {
              let instance: VendorModel = new VendorModel().deserialize(vendorObj);
              this.vendorList.push(instance);
            }
  
            this.vendorService.vendorArray = this.vendorList;

            this.loader = this.loadingController.create({
              content: 'Loading Specials...',
            });

            this.loader.present();
            
            this.specialService.getSpecialList()
            .subscribe(
              specialdata => {
                this.loader.dismiss().then(() => {
        
                  for (let specialObj of specialdata) {
                    let instance: SpecialModel = new SpecialModel().deserialize(specialObj);
                    this.specialList.push(instance);
                  }
                  
                  this.specialService.specialArray = this.specialList;
                  
                  this.loader = this.loadingController.create({
                    content: 'Loading Menus...',
                  });
      
                  this.loader.present();
                  
                  this.menuService.getMenuList()
                  .subscribe(
                    menudata => {
                      this.loader.dismiss().then(() => {
              
                        for (let menuObj of menudata) {
                          let instance: MenuModel = new MenuModel().deserialize(menuObj);
                          this.menuList.push(instance);
                        }
                        
                        //Ensure even numbers
                        if (this.vendorList.length % 2 != 0) {
                          var vendorPlaceHolder = new VendorModel();
                          vendorPlaceHolder.vendorLogoUrl = "assets/imgs/NamazingOryxCircle1000.png";
                          vendorPlaceHolder.vendorName = "placeholder";
                          this.vendorList.push(vendorPlaceHolder);
                        }

                        this.menuService.menuArray = this.menuList;
                        
                        this.grid = Array(Math.ceil(this.vendorList.length/2)); 
              
                        // TILES
                        let rowNum = 0; //counter to iterate over the rows in the grid
              
                        for (let i = 0; i < this.vendorList.length; i+=2) { //iterate images
                      
                          this.grid[rowNum] = Array(2); //declare two elements per row
                      
                          if (this.vendorList[i]) { //check file URI exists
                            this.grid[rowNum][0] = this.vendorList[i] //insert image
                          }
                      
                          if (this.vendorList[i+1]) { //repeat for the second image
                            this.grid[rowNum][1] = this.vendorList[i+1]
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

    } else {
      this.vendorList = this.vendorService.vendorArray;


      this.grid = Array(Math.ceil(this.vendorList.length/2)); 

      // TILES
      let rowNum = 0; //counter to iterate over the rows in the grid

      for (let i = 0; i < this.vendorList.length; i+=2) { //iterate images
    
        this.grid[rowNum] = Array(2); //declare two elements per row
    
        if (this.vendorList[i]) { //check file URI exists
          this.grid[rowNum][0] = this.vendorList[i] //insert image
        }
    
        if (this.vendorList[i+1]) { //repeat for the second image
          this.grid[rowNum][1] = this.vendorList[i+1]
        }
    
        rowNum++; //go on to the next row
      }      
    }

  }  


}
