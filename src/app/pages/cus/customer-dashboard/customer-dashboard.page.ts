import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { EffectCards } from "swiper";
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.page.html',
  styleUrls: ['./customer-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,SwiperModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerDashboardPage implements OnInit {

  genderSelected = false
  clothingSelectedBool = false
  clothingSelected: string = '';
  
  clothingItems = [
    { type: 'dresses', name: 'Dresses' },
    { type: 'skirts', name: 'Skirts' },
    { type: 'pants', name: 'Pants' },
    // ... add more as needed
];


  constructor() { }

  ngOnInit() {
  }

 

  selectClothing(clothingType: string) {
    this.clothingSelected = clothingType;
}

}
