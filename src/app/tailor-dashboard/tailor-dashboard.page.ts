import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/apiServices/api-service.service';
import { GlobalVariablesService } from '../services/globalvars/global-variables.service';

@Component({
  selector: 'app-tailor-dashboard',
  templateUrl: './tailor-dashboard.page.html',
  styleUrls: ['./tailor-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TailorDashboardPage implements OnInit {
  orders: any
  segment = 'new'
  selectedOrder:any
  modalOpen = false
  modalOpen1 = false

  
  measurements = {
    chest: 102, // centimeters
    waist: 81, // centimeters
    hips: 97, // centimeters
    inseam: 81, // centimeters
    sleeveLength: 86, // centimeters
    shoulderWidth: 46 // centimeters
  };
  constructor( public service: ApiService, public global: GlobalVariablesService) { 
   this.orders = service.loadOrders()
  }

  ngOnInit() {
  }

}
