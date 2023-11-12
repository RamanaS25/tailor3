import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.page.html',
  styleUrls: ['./final-order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinalOrderPage implements OnInit {

  constructor(private router: Router, private sharedData: SharedDataService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.selectedItem = this.sharedData.getSelectedItem();
    this.checkboxData = new Array(this.selectedItem.numberOfCheckBoxes).fill({ picture: null, number: null });
  }

  selectedItem: any = {};  
  previewUrl: any = null;
  showModal: boolean = false;
  currentData = { picture: null, number: null };
  currentCheckboxIndex: number = -1;
  checkboxData: Array<{ picture: any, number: any }> = [];
  private timer: any;
  public timeElapsed: number = 0;
  isLoading: boolean = false;
  fileUploaded: boolean = false;
  cameraRed: boolean = false;
  animateOut: boolean = false;
  showModalAd: boolean = false;
  public sliderValue: number = 1; // Default value
  public calculatedPrice: number = 0;


  finalItem = {
    cloth1: null,
    cloth2: null,
    cloth3: null,
    cloth4: null,
    finalPrice: 0,
    Details: "",
    AdPic: ""
    // Add other properties as needed
  };

   populateFinalItem(): void {
    // Assuming there are always at least four items in checkboxData
    this.finalItem.cloth1 = this.checkboxData[0]?.picture || null;
    this.finalItem.cloth2 = this.checkboxData[1]?.picture || null;
    this.finalItem.cloth3 = this.checkboxData[2]?.picture || null;
    this.finalItem.cloth4 = this.checkboxData[3]?.picture || null;
    this.finalItem.finalPrice = this.calculatedPrice; // Already calculated from previous steps
    this.finalItem.Details 
    this.finalItem.AdPic
    // Populate other properties as needed
    // this.finalItem.otherProperty = ...

    // Update the view if necessary
    this.cdRef.detectChanges();
  }





  navigateToCustomerDashboard() {
    this.router.navigate(['/customer-dashboard']);
  }

  openModal(index: number): void {
    this.currentData = { picture: null, number: null };
    this.currentCheckboxIndex = index;
    this.showModal = true;
    setTimeout(() => this.showModal = true, 10);
    
  }


  OpenModalAd() {
  this.showModalAd = true;

  }

  close() {
    this.showModalAd = false;
  }

  submitModal(): void {
    if (this.currentData.picture && this.currentData.number) {
      // Assign the current data to the checkboxData array.
      this.checkboxData[this.currentCheckboxIndex] = { ...this.currentData };
  
      // Use Angular's change detection to update the view.
      this.cdRef.detectChanges();
  
      // Reset the modal display state after the view is updated.
     
      this.animateOut = true;
      // Clear any running timers for the loading state.
      this.clearTimer();
  
      // Reset the indicators without a delay.
     
      this.isLoading = false;
      this.cameraRed = false;
  
      // Reset currentData if you want to clear the form after submitting.
      this.currentData = { picture: null, number: null };
      // Reset the current checkbox index if necessary.
      this.currentCheckboxIndex = -1;
      this.cdRef.detectChanges();
    }
    setTimeout(() => {
      this.currentData = { picture: null, number: null };
      this.currentCheckboxIndex = -1;
      this.animateOut = false;
      this.showModal = false;
      this.fileUploaded = false;
      // Trigger change detection to ensure the view updates correctly
      this.cdRef.detectChanges();
    }, 500); //
  }
  

  allCheckboxesInteracted(): boolean {
    return this.checkboxData.every(data => data.picture && data.number);
  }

  getArray(n: number): any[] {
    return new Array(n);
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Begin simulated loading
      this.isLoading = true;
  
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.currentData.picture = e.target.result.split(",")[1]; // Split to get the base64 data
  
        // Set a timeout to delay setting fileUploaded to true, which will show the tick mark
        setTimeout(() => {
          // Indicate the loading is done
          this.isLoading = false;
          // Indicate the file was uploaded successfully
          this.fileUploaded = true;
  
          // Trigger change detection if necessary
          this.cdRef.detectChanges();
        }, 1000); // Delay the tick mark for 1.5 seconds
      };
  
      reader.onerror = (error) => {
        // Handle the error appropriately.
        console.error('FileReader error:', error);
        this.isLoading = false;
        this.cdRef.detectChanges();
      };
  
      reader.readAsDataURL(file);
    }
  }


clearTimer() {
  clearInterval(this.timer);

}

calculatePrice(): void {
  let totalPercentage = 0;
  let calculatedValues = [];

  // Assuming checkboxData is already populated and each has a 'number' property
  if (this.checkboxData.length >= 4) {
    // Calculate for the first three items based on the 10%, 20%, 30%
    for (let i = 0; i < 3; i++) {
      const percentage = (i + 1) * 10 / 100; // 10%, 20%, 30%
      calculatedValues[i] = Math.round(this.checkboxData[i].number * (this.sliderValue * percentage));
      totalPercentage += percentage;
    }
    // The rest of the value for the fourth item
    const remainingPercentage = 1 - totalPercentage;
    calculatedValues[3] = Math.round(this.checkboxData[3].number * (this.sliderValue * remainingPercentage));
  } else {
    // If there are less than 4 items, just multiply each by the slider value directly and round
    this.checkboxData.forEach((item, index) => {
      calculatedValues[index] = Math.round(item.number * this.sliderValue);
    });
  }

  // Sum all the calculated values and round the total
  this.calculatedPrice = calculatedValues.reduce((sum, value) => sum + value, 0);

  // Update the view if necessary
  this.cdRef.detectChanges();
}


}