import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'  

import {HttpService} from '../services/http-service';

import {VendorModel} from '../models/vendor-model';
import {VendorService} from '../services/vendor-service';
import {SpecialService} from '../services/special-service';
import {MenuService} from '../services/menu-service';
import {HelperService} from '../services/helper-service';
import {ConfigService} from '../services/config-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MenudtlPage } from '../pages/menudtl/menudtl';
import { SpecialsPage } from '../pages/specials/specials';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    SpecialsPage,
    TabsPage,
    InfoPage,
    MenudtlPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    SpecialsPage,
    TabsPage,
    InfoPage,
    MenudtlPage
  ],
  providers: [
    StatusBar,
    ConfigService,
    SplashScreen,
    VendorModel,
    VendorService,
    SpecialService,
    MenuService,
    HelperService,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
