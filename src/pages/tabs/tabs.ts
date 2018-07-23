import { Component } from "@angular/core";
import { SpecialsPage } from "../specials/specials";
import { MenuPage } from "../menu/menu";


@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="specialsPage" tabTitle="Specials" color="dark"></ion-tab>
            <ion-tab [root]="menuPage" tabTitle="Menu"></ion-tab>
        </ion-tabs>
    `
}
)
export class TabsPage {
    specialsPage = SpecialsPage;
    menuPage = MenuPage;
}