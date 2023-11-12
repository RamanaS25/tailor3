import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }


  selectedItem: any;
  
  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  onCheckboxClick(index: number) {
    // Your logic for when a checkbox is clicked
    console.log(`Checkbox ${index + 1} was clicked!`);
  }


}
