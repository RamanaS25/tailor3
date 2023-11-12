import { Component, OnInit, Injectable, ViewChild, ChangeDetectorRef   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import SwiperCore, { EffectCards, EffectCoverflow } from "swiper";
import { SwiperComponent } from 'swiper/angular';
import { Router } from '@angular/router';
import { SharedDataService } from '../../../services/shared-data.service';
SwiperCore.use([EffectCards, EffectCoverflow]);






@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.page.html',
  styleUrls: ['./customer-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SwiperModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
@Injectable({
  providedIn: 'root'
})



export class CustomerDashboardPage implements OnInit {

  @ViewChild('mySwiper') swiperRef?: SwiperComponent;
  
  
  constructor(private cdRef: ChangeDetectorRef, private router: Router, private sharedData: SharedDataService) {
    
   }
  ngOnInit() {
  }

  showSwiper: boolean = true;
  selectedGender: string = '';
  displayedClothes = [];
  isChildSelected: boolean = false;
  selectedClothType: string = '';
  isSwiperActive: boolean = false;
  animateOut = false;
  selectedClothId: string | null = null;
  isModalOpen = false;

  SwiperClothes: any[] = [];
  selectedGenderClothes: any[] = [];

  currentIndex: number = 0;

  updateView() {
    this.cdRef.detectChanges();
  }

  navigateToFinalOrder(currentIndex : number) {
    this.router.navigate(['/final-order']);
    const selectedItem = this.SwiperClothes[currentIndex];
    this.sharedData.setSelectedItem(selectedItem);
  }





  get displayedSection(): 'initial_gender_selection' | 'child_selection' | 'grid_container' | 'swiper' {
    if(!this.isChildSelected && !this.selectedGender) {
        return 'initial_gender_selection';
    } else if (this.isChildSelected && !this.selectedClothType) {
        return 'child_selection';
    } else if (this.isSwiperActive) {
        return 'swiper';}
      else if(this.selectedGender && !this.selectedClothType) 
        {return 'grid_container';}
     else {
        return 'initial_gender_selection';
    }
}
  
  

  clothes = [
    { gender: 'woman', type: 'pants', model: 'Display', imagePath:'../../../../assets/clothAssets/women/pants2.jpg', foggyText:'Pants'},
    { gender:  'woman', type: 'skirt', model: 'Display', imagePath:'../../../../assets/clothAssets/women/skirt1.jpg', foggyText:'Skirt'},
    { gender: 'woman', type: 'dress', model: 'Display', imagePath:'../../../../assets/clothAssets/women/dress1.jpg', foggyText:'Dress'},
    { gender: 'woman', type: 'choli', model: 'Display', imagePath:'../../../../assets/clothAssets/women/choli1.jpg', foggyText:'Choli'},
    { gender: 'woman', type: 'kurta', model: 'Display', imagePath:'../../../../assets/clothAssets/women/kurta1.jpg', foggyText:'Kurta'},
    
    { gender: 'woman', type: 'skirt', model: 'bubu', imagePath:'../../../../assets/clothAssets/women/Skirts/SkirtOne.jpg', foggyText:'SkirtName1'  , price:'300 Rs~', maxRangeValue: 10, numberOfCheckBoxes: 3},
    { gender: 'woman', type: 'skirt', model: 'bubu', imagePath:'../../../../assets/clothAssets/women/Skirts/SkirtTwo.jpg', foggyText:'SkirtName2',  price:'550 Rs~', maxRangeValue: 9, numberOfCheckBoxes: 2},
    { gender: 'woman', type: 'dress', model: 'bubu', imagePath:'../../../../assets/clothAssets/women/Dresses/DressOne.jpg', foggyText:'DressName1', price:'1100 Rs~', maxRangeValue: 5, numberOfCheckBoxes: 1 },
    { gender: 'woman', type: 'dress', model: 'bubu', imagePath:'../../../../assets/clothAssets/women/Dresses/DressTwo.jpg', foggyText:'DressName2', price:'350 Rs~', maxRangeValue: 4, numberOfCheckBoxes: 4},
    

    { gender: 'man', type: 'kurtaMen', model: 'Display', imagePath: '../../../../assets/clothAssets/men/kurtaMen.jpg', foggyText:'Kurta'},
    { gender: 'man', type: 'pantsMen', model: 'Display', imagePath: '../../../../assets/clothAssets/men/pants1.jpg', foggyText:'Pants'},
    { gender: 'man', type: 'dhoti', model: 'Display', imagePath: '../../../../assets/clothAssets/men/Dhoti.jpg', foggyText:'Dhoti'},
    { gender: 'girl', type: 'skirtGirl', model: 'Display', imagePath:'../../../../assets/clothAssets/girls/CholiGirl.jpg', foggyText:'Choli'},
    { gender: 'girl', type: 'dressGirl', model: 'Display', imagePath:'../../../../assets/clothAssets/girls/DressGirl.jpg', foggyText:'Dress'},
    { gender: 'girl', type: 'choliGirl', model: 'Display', imagePath:'../../../../assets/clothAssets/girls/GirlPants.jpg', foggyText:'Pants' },
    { gender: 'girl', type: 'SlirtGirl', model: 'Display', imagePath:'../../../../assets/clothAssets/girls/GrilSkirt.jpg', foggyText:'Skirt' },
    { gender: 'girl', type: 'KurtaGirl', model: 'Display', imagePath:'../../../../assets/clothAssets/girls/KurtaGirl.jpg', foggyText:'Kurta' },
    { gender: 'boy', type: 'kurtaBoy', model: 'Display', imagePath: '../../../../assets/clothAssets/boys/KurtaBoy.jpg', foggyText:'Kurta'},
    { gender: 'boy', type: 'pantsBoy', model: 'Display', imagePath: '../../../../assets/clothAssets/boys/PantsBoy.jpg', foggyText:'Pants'},
    { gender: 'boy', type: 'dhotiBoy', model: 'Display', imagePath: '../../../../assets/clothAssets/men/Dhoti.jpg', foggyText:'Dhoti', },
    

  ];


  goBack() {


    this.animateOut = true;
    
    setTimeout(() => {
      this.animateOut = false;
      this.selectedGender = '';
      this.isChildSelected = false;
      this.selectedGenderClothes = null ;
      this.isSwiperActive = false ;
    }, 250); // This timeout should match the duration of your animation
  }


 
 

  displayClothes(gender: string) {
    this.selectedGender = gender;
    this.displayedClothes = this.clothes.filter(item => item.gender === this.selectedGender && item.model === 'Display');
    let delay = 0.2; // for floatIn
    let tintDelay = 1.1; // 0.5s (floatIn duration) + 0.2s delay for the first card
    let textDelay = 2.4; // 0.5s (floatIn) + 0.2s (initial floatIn delay) + 0.5s (fadeIn for overlay)

    for (let item of this.displayedClothes) {
        item.animationDelay = delay + 's';
        item.tintDelay = tintDelay + 's';
        item.textDelay = textDelay + 's';

        delay += 0.2;
        tintDelay += 0.2;
        textDelay += 0.0 ;
    }
  }

  onCardClick(cloth: any) {
    
    this.selectedClothId = cloth.type;  // Assuming each item in the array has a unique 'id'.
  
    this.sortSelectedGenderClothes();
    this.updateSwiperClothes();
    
    
  }

  updateDisplayedClothes(gender: string) {
    this.selectedGenderClothes = this.clothes.filter(c => c.gender === gender && c.model === 'Display');
    this.sortSelectedGenderClothes();
  }

  sortSelectedGenderClothes() {
    this.selectedGenderClothes.sort((a, b) => {
      if (a.type === this.selectedClothId) {
        return -1; // 'a' should come before 'b'
      } else if (b.type === this.selectedClothId) {
        return 1;  // 'b' should come before 'a'
      }
      return 0;   // keep the relative order unchanged
    });
  }

  ActivateSwiper() {
    this.isSwiperActive = !this.isSwiperActive;
  }

  CardClick(cloth: any) {
    this.selectedClothId = cloth.type;
    this.showSwiper = false;
    this.currentIndex = 0;
    
  
    setTimeout(() => {
      this.updateSwiperClothes();
      this.showSwiper = true;
    }, 0);
  }

  updateSwiperClothes() {
    this.SwiperClothes = this.clothes.filter(cloth => 
        cloth.gender === this.selectedGender && 
        cloth.type === this.selectedClothId &&
        cloth.model !== 'Display'
    );
}

onSlideNext() {
  if (this.currentIndex < this.SwiperClothes.length - 1) { // Ensure we don't exceed array bounds
    this.currentIndex++;
  }
  console.log("Slide Next", this.currentIndex);
  this.updateView();
}

onSlidePrev() {
  if (this.currentIndex > 0) { // Ensure we don't go negative
    this.currentIndex--;
  }
  console.log("Slide Prev", this.currentIndex);
  this.updateView();
}

setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
}

}



