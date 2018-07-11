import { Component } from "@angular/core";
import { SpecialsPage } from "../specials/specials";
import { MenuPage } from "../menu/menu";


@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="specialsPage" tabTitle="Specials" tabIcon="star"></ion-tab>
            <ion-tab [root]="menuPage" tabTitle="Menu" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
}
)
export class TabsPage {
    specialsPage = SpecialsPage;
    menuPage = MenuPage;
}