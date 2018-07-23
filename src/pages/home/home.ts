import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  params: Object;
  tabsPage: any;

  images: Array<string>;  
  grid: Array<Array<string>>; //array of arrays

  constructor(){

    this.tabsPage = TabsPage;
    this.params = { id: 42 };
    this.images = [
      'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
      'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
      'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
      'https://namazing.s3.amazonaws.com/DRS001/vendorLogo.jpg',
    ];
    this.grid = Array(Math.ceil(this.images.length/2)); //MATHS!

  }

  ionViewDidLoad() {

    console.log('aa')

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
  
  }  


}
