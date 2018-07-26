import { Component } from "@angular/core";
import { SpecialsPage } from "../specials/specials";
import { MenuPage } from "../menu/menu";
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="specialsPage" [rootParams]="vendor" tabTitle="Specials" color="dark"></ion-tab>
            <ion-tab [root]="menuPage" [rootParams]="vendor" tabTitle="Menu"></ion-tab>
        </ion-tabs>
    `
}
)
export class TabsPage {
    specialsPage = SpecialsPage;
    menuPage = MenuPage;
    private vendor: any;

    constructor(params: NavParams) {

        this.vendor = params.data;
        console.log(this.vendor);
      }
  }